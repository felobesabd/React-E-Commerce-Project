import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotifications";
import { getAllCategory } from "../../Redux/Actions/categoryAction";
import { createSubcategory } from "./../../Redux/Actions/subcategoryAction";
const SubcategoryHook = () => {
  const dispatch = useDispatch();

  // When First Load
  useEffect(() => {
    if (!navigator.onLine) {
      notify("الانترنت ضعيف او لا يوجد اتصال للانترنت", "warn");
      return;
    }
    dispatch(getAllCategory());
  }, []);

  const [id, setID] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  // To Get Last Category state From Redux
  const category = useSelector((state) => state.allCategory.category);

  // To Get Last Subcategory state From Redux
  const subcategory = useSelector((state) => state.subcategory.subcategory);

  // to Change dropdown menu value
  const handleChange = (e) => {
    console.log(e.target.value);
    setID(e.target.value);
  };

  // to save name
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  // To save Data
  const handleSubmit = async (e) => {
    if (!navigator.onLine) {
      notify("الانترنت ضعيف او لا يوجد اتصال للانترنت", "warn");
      return;
    }
    e.preventDefault();
    if (name === "") {
      notify("من فضلك أدخل تصنيف فرعي", "warn");
      return;
    }
    if (id === "0") {
      notify("من فضلك أختر تصنيف رئيسي", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createSubcategory({
        name,
        category: id,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setID("0");
      if (subcategory) {
        console.log(subcategory);
      }
      if (subcategory.status === 201) {
        notify("تمت الاضافة بنجاح", "success");
      } else if (
        subcategory === "Error AxiosError: Request failed with status code 400"
      ) {
        notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn");
      } else {
        notify("هناك مشكلة في عملية الاضافة", "warn");
      }
      setLoading(true);
    }
  }, [loading]);

  return [id, name, category, handleChange, handleSubmit, onChangeName];
};

export default SubcategoryHook;
