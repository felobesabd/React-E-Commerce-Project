import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import add from "../../images/add.png";
import { CompactPicker } from "react-color";
import MultiImageInput from "react-multiple-image-input";
import { ToastContainer } from "react-toastify";
import AdminAddProductHook from "./../../hook/products/add-product-hook";

const AdminAddProducts = () => {
  const [
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
  ] = AdminAddProductHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={5}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            value={prodName}
            onChange={onChangeProdName}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={prodDesc}
            onChange={onChangeDescName}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={priceBefore}
            onChange={onChangePriceBefore}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
            value={priceAfter}
            onChange={onChangePriceAfter}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتوفرة"
            value={qty}
            onChange={onChangeQty}
          />
          <select
            onChange={onSelectCategory}
            name="cat"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">التصنيف الرئيسي</option>
            {category.data
              ? category.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            onChange={onSelectBrand}
            name="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">أختر ماركة</option>
            {brand.data
              ? brand.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors.length >= 1
              ? colors.map((item, index) => {
                  return (
                    <div
                      onClick={() => removeColor(item)}
                      key={index}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: item }}
                    ></div>
                  );
                })
              : null}
            <img
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
              onClick={onChangeColor}
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={handleChangeComplete} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddProducts;
