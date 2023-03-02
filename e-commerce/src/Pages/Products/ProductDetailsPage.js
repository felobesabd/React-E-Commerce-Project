import React from "react";
import { Container } from "react-bootstrap";
import CategoryHeader from "./../../Components/Category/CategoryHeader";
import ProductDetails from "./../../Components/Products/ProductDetails";
import RateContainer from "./../../Components/Rate/RateContainer";
import CardProductsContainer from "./../../Components/Products/CardProductsContainer";
import ViewProductDetailsHook from "../../hook/products/view-product-details-hook";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [item, images, cat, brand, simProds] = ViewProductDetailsHook(id);

  try {
    if (simProds) {
      var simItems = simProds.slice(0, 4);
    }
  } catch (e) {}

  try {
    if (item) {
      var rateAvg = item.ratingsAverage;
      var rateQty = item.ratingsQuantity;
    }
  } catch (e) {}

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
        <CardProductsContainer product={simItems} title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
