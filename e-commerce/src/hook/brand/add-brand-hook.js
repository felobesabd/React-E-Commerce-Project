import React, { useEffect, useState } from "react";
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { createBrands } from "../../Redux/Actions/brandAction";
import "react-toastify/dist/ReactToastify.css";
import notify from "../useNotifications";

const AddBrandHook = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(null);
  const [IsPressing, setIsPressing] = useState(null);

  //   To Change Name State

  const onChangeNameState = (e) => {
    e.persist();
    setName(e.target.value);
  };

  // When Image Changes, Save it
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const res = useSelector((state) => state.allBrands.brand);

  // Save Data in Database
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || selectedFile === null) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    console.log(`جاري التحميل`);
    await dispatch(createBrands(formData));

    setLoading(false);
    setIsPressing(true);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setImg(avatar);
      setSelectedFile(null);
      console.log(`تم الانتهااء`);
      setLoading(true);
      setTimeout(() => {
        setIsPressing(false);
      }, 500);

      if (res.status === 201) {
        notify("تمت الاضافة بنجاح", "success");
      } else {
        notify("هناك مشكلة في الاضافة", "error");
      }
    }
  }, [loading]);

  return [
    img,
    name,
    loading,
    IsPressing,
    onImageChange,
    handleSubmit,
    onChangeNameState,
  ];
};

export default AddBrandHook;
