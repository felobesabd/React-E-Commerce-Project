import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import DeleteCartHook from "./../../hook/cart/delete-cart-hook";
import { ToastContainer } from "react-toastify";
import UpdateCartHook from "./../../hook/cart/update-cart-hook";
const CartItem = ({ item }) => {
  const [
    handleDeleteCart,
    handleDeleteSpecificItem,
    handleClose,
    handleShow,
    showDelete,
  ] = DeleteCartHook(item);
  // console.log(item);

  const [handleUpdateCart, onChangeItemCount, itemCount] = UpdateCartHook(item);

  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="onlyfont">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f9f9f9" }}>
          <div className="onlyfont">هل أنت متأكد من حذف المنتج من العربة؟</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <div className="onlyfont">تراجع</div>
          </Button>
          <Button variant="danger" onClick={handleDeleteSpecificItem}>
            <div className="onlyfont">تأكيد الحذف</div>
          </Button>
        </Modal.Footer>
      </Modal>
      <img
        width="160px"
        height="197px"
        src={item.product.imageCover || mobile}
        alt=""
      />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">
              {item.product.category.name || ""}
            </div>
            <div
              onClick={handleShow}
              className="d-flex pt-2 "
              style={{ cursor: "pointer" }}
            >
              <img src={deleteicon} alt="" width="20px" height="24px" />
              <div className="cat-text d-inline me-2">ازاله</div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">
              {item.product.title || ""}
            </div>
            <div className="d-inline pt-2 cat-rate me-2">
              {item.product.ratingsAverage || 0}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">
              {item.product.brand ? item.product.brand.name : ""}{" "}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            {item.color === "" ? null : (
              <div
                className="color ms-2 border"
                style={{ backgroundColor: `${item.color}` }}
              ></div>
            )}
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text mt-2 d-inline">الكميه</div>
              <input
                value={itemCount}
                onChange={onChangeItemCount}
                className="mx-2 text-center"
                type="number"
                style={{ width: "60px", height: "40px" }}
              />
              <Button onClick={handleUpdateCart} className="btn btn-dark">
                تطبيق
              </Button>
            </div>
            <div className="d-inline pt-2 barnd-text">
              {item.price || 0} جنية
            </div>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </Col>
  );
};

export default CartItem;
