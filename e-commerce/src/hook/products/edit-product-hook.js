import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/categoryAction";
import { getAllBrands } from "../../Redux/Actions/brandAction";
import { getOneCategory } from "../../Redux/Actions/subcategoryAction";
import {
  createProducts,
  getOneProduct,
  updateProducts,
} from "./../../Redux/Actions/productAction";
import notify from "../../hook/useNotifications";

const AdminEditProductHook = (id) => {
  const dispatch = useDispatch();
  // When First Load
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneProduct(id));
      await dispatch(getAllCategory());
      await dispatch(getAllBrands());
    };
    run();
  }, []);

  //To Get Product Details
  const item = useSelector((state) => state.allProducts.oneProduct);

  // To Get Last Category state From Redux
  const category = useSelector((state) => state.allCategory.category);

  let cats = [];
  try {
    if (category.data) {
      cats = category.data;
    } else {
      cats = [];
    }
  } catch (e) {}
  // To Get Last Brand state From Redux
  const brand = useSelector((state) => state.allBrands.brand);

  let brds = [];
  try {
    if (brand.data) {
      brds = brand.data;
    } else {
      brds = [];
    }
  } catch (e) {}
  // To Get Last Subcategory state From Redux
  const subCat = useSelector((state) => state.subcategory.subcategory);

  const onSelect = (selectedList) => {
    setSelectedsubCatID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedsubCatID(selectedList);
  };

  const [options, setOptions] = useState([]);
  // Value of Images
  const [images, setImages] = useState([]);
  // Value of State
  const [prodName, setProdName] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتوفرة");
  const [catID, setCatID] = useState("");
  const [brandID, setBrandID] = useState("");
  const [subCatID, setSubCatID] = useState([]);
  const [selectedsubCatID, setSelectedsubCatID] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item.data) {
      setProdName(item.data.title);
      setProdDesc(item.data.description);
      setPriceBefore(item.data.price);
      setQty(item.data.quantity);
      setCatID(item.data.category);
      setBrandID(item.data.brand);
      setColors(item.data.availableColors);
      setImages(item.data.images);
    }
  }, [item]);

  const onChangeProdName = (e) => {
    e.persist();
    setProdName(e.target.value);
  };
  const onChangeDescName = (e) => {
    e.persist();
    setProdDesc(e.target.value);
  };
  const onChangePriceBefore = (e) => {
    e.persist();
    setPriceBefore(e.target.value);
  };
  const onChangePriceAfter = (e) => {
    e.persist();
    setPriceAfter(e.target.value);
  };
  const onChangeQty = (e) => {
    e.persist();
    setQty(e.target.value);
  };
  const onChangeColor = (e) => {
    e.persist();
    setShowColor(!showColor);
  };

  // store Category ID when select any Category
  const onSelectCategory = async (e) => {
    setCatID(e.target.value);
  };
  useEffect(() => {
    setTimeout(() => {
      if (catID != 0) {
        const run = async () => {
          await dispatch(getOneCategory(catID));
        };
        run();
      }
    }, 1000);
  }, [catID]);

  useEffect(() => {
    setTimeout(() => {
      if (subCat !== 0) {
        setOptions(subCat.data);
      }
    }, 1000);
  }, [subCat]);

  // store Brand ID when select any Category
  const onSelectBrand = (e) => {
    setBrandID(e.target.value);
  };

  // To Show & Hide Color Picker
  const [showColor, setShowColor] = useState(false);

  // To Store all Picked Colors
  const [colors, setColors] = useState([]);
  // When Choosing a new Color
  const handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };
  //To Remove Picked Color
  const removeColor = (color) => {
    const newColors = colors.filter((e) => e !== color);
    setColors(newColors);
  };

  // To Save Data When Click on Save Changes
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      catID === 0 ||
      prodName === "" ||
      prodDesc === "" ||
      qty === 0 ||
      priceBefore <= 0 ||
      images.length <= 0
    ) {
      notify("من فضلك أكمل البيانات", "warn");
      if (priceBefore <= priceAfter) {
        notify("برجاء اختيار السعر المناسب بعد الخصم", "error");
        setPriceAfter("السعر بعد الخصم");
        return;
      }
    }

    //convert url to file
    const convertURLtoFile = async (url) => {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.blob();
      const ext = url.split(".").pop();
      const filename = url.split("/").pop();
      const metadata = { type: `image/${ext}` };
      return new File([data], Math.random(), metadata);
    };

    // To Convert base64 to File
    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, { type: mime });
    }

    let imgCover;
    if (images[0].length <= 1000) {
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      // Conver base 64 imgaes to File
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }

    let imagesArray = [];

    // Convert array of base 64 imgaes to File
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => imagesArray.push(val));
      } else {
        imagesArray.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDesc);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);

    setTimeout(() => {
      formData.append("imageCover", imgCover);
      imagesArray.map((item) => formData.append("images", item));
    }, 1000);

    formData.append("category", catID);
    formData.append("brand", brandID);

    colors.map((color) => formData.append("availableColors", color));
    selectedsubCatID.map((selectedSubID) =>
      formData.append("subcategory", selectedSubID._id)
    );

    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateProducts(id, formData));
      setLoading(false);
    }, 1000);
  };

  // Create Message
  const product = useSelector((state) => state.allProducts.updateProducts);

  useEffect(() => {
    if (loading === false) {
      setProdName("");
      setProdDesc("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتوفرة");
      setCatID(0);
      setBrandID("");
      setSelectedsubCatID([]);
      setImages([]);
      setColors([]);
      setTimeout(() => {
        setLoading(true);
      }, 1500);

      if (product) {
        if (product.status === 200) {
          notify("تم التعديل بنجاح", "success");
        } else {
          notify("هناك مشكلة في الاضافة", "error");
        }
      }
    }
  }, [loading]);

  return [
    onChangeProdName,
    onChangeDescName,
    onChangePriceBefore,
    onChangePriceAfter,
    onChangeQty,
    onChangeColor,
    catID,
    brandID,
    images,
    setImages,
    prodName,
    prodDesc,
    priceBefore,
    priceAfter,
    qty,
    setQty,
    onSelectCategory,
    category,
    options,
    onSelect,
    onRemove,
    onSelectBrand,
    brand,
    colors,
    removeColor,
    setShowColor,
    showColor,
    handleChangeComplete,
    handleSubmit,
    cats,
    brds,
  ];
};

export default AdminEditProductHook;
