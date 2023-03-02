import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/categoryAction";
import { getAllBrands } from "../../Redux/Actions/brandAction";
import { getOneCategory } from "../../Redux/Actions/subcategoryAction";
import { createProducts } from "./../../Redux/Actions/productAction";
import notify from "../../hook/useNotifications";

const AdminAddProductHook = () => {
  const dispatch = useDispatch();
  // When First Load
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrands());
  }, []);

  // To Get Last Category state From Redux
  const category = useSelector((state) => state.allCategory.category);
  // To Get Last Brand state From Redux
  const brand = useSelector((state) => state.allBrands.brand);
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
    if (e.target.value !== 0) {
      await dispatch(getOneCategory(e.target.value));
    }
    setCatID(e.target.value);
  };
  useEffect(() => {
    if (catID !== 0) {
      if (subCat !== 0) {
        setOptions(subCat.data);
      }
    }
  }, [catID]);
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

    // Conver base 64 imgaes to File
    const imgCover = dataURLtoFile(images[0], Math.random() + ".png");

    // Conver array of base 64 imgaes to File
    const imagesArray = Array.from(
      Array(Object.keys(images).length).keys()
    ).map((item, index) => {
      return dataURLtoFile(images[index], Math.random() + ".png");
    });

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDesc);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    formData.append("priceAfterDiscount", priceAfter);
    formData.append("imageCover", imgCover);
    formData.append("category", catID);
    formData.append("brand", brandID);
    colors.map((color) => formData.append("availableColors", color));
    imagesArray.map((item) => formData.append("images", item));
    selectedsubCatID.map((selectedSubID) =>
      formData.append("subcategory", selectedSubID._id)
    );
    setLoading(true);
    await dispatch(createProducts(formData));
    setLoading(false);
  };

  // Create Message
  const product = useSelector((state) => state.allProducts.products);

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
        if (product.status === 201) {
          notify("تمت الاضافة بنجاح", "success");
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
  ];
};

export default AdminAddProductHook;
