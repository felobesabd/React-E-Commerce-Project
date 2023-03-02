import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "./../../Components/Cart/CartItem";
import CartCheckout from "./../../Components/Cart/CartCheckout";
import GetAllUserCartHook from "./../../hook/cart/get-all-user-cart-hook";

const CartPage = () => {
  const [
    itemsNums,
    cartItems,
    totalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
  ] = GetAllUserCartHook();
  if (cartItems) {
    // console.log(cartItems);
  }
  return (
    <div>
      <Container style={{ minHeight: "670px" }}>
        <Row>
          <div className="cart-title mt-4">عربة التسوق</div>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs="12" md="9">
            {cartItems.length >= 1 ? (
              cartItems.map((item, index) => {
                return <CartItem item={item} key={index} />;
              })
            ) : (
              <h6>لا توجد منتجات في العربة</h6>
            )}
          </Col>
          <Col xs="6" md="3">
            <CartCheckout
              cartItems={cartItems}
              couponNameRes={couponNameRes}
              totalCartPriceAfterDiscount={totalCartPriceAfterDiscount}
              totalCartPrice={totalCartPrice}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartPage;
