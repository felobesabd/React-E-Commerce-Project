import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import AddCategoryHook from "../../hook/category/add-category-hook";
import { ToastContainer } from "react-toastify";

const AdminAddCategory = () => {
  const [
    img,
    name,
    loading,
    IsPressing,
    onImageChange,
    handleSubmit,
    onChangeNameState,
  ] = AddCategoryHook();

  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">أضف تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صورة التصنيف</div>
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="avatar"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              id="upload-photo"
              onChange={onImageChange}
            />
          </div>
          <input
            onChange={onChangeNameState}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {IsPressing ? (
        loading ? (
          <Spinner className="m-auto" animation="border" variant="primary" />
        ) : (
          <h4>تم الانتهاء</h4>
        )
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddCategory;
