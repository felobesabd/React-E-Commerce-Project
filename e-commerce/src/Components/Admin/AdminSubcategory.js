import React from "react";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import SubcategoryHook from "./../../hook/subcategory/subcategory_hook";
const AdminSubcategory = () => {
  const [id, name, category, handleChange, handleSubmit, onChangeName] =
    SubcategoryHook();
  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">أضف تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
          />
          <div className="d-flex mt-2 justify-content-center">
            <select
              name="category"
              id="cat"
              className="select  mt-3 px-3"
              onChange={handleChange}
            >
              <option value="0">أختر تصنيف رئيسي</option>
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
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminSubcategory;
