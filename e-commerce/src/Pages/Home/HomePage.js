import React from "react";
import NavBarLogin from "../../Components/Utilities/NavBarLogin";
import Slider from "./../../Components/Home/Slider";
import HomeCategory from "./../../Components/Home/HomeCategory";
import CardProductsContainer from "./../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandCardFeatures from "./../../Components/Brand/BrandCardFeatures";
import Footer from "./../../Components/Utilities/Footer";
import ViewHomeProductsHook from "../../hook/products/view-home-products-hook";

const HomePage = () => {
  const [items] = ViewHomeProductsHook();
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        product={items}
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        product={items}
        title="أحدث الازياء"
        btntitle="المزيد"
        pathText="/products"
      />
      <BrandCardFeatures title="أشهر الماركات" btntitle="المزيد" />
      {/* <BrandCardFeatures title="أشهر الماركات" btntitle="المزيد" /> */}
    </div>
  );
};

export default HomePage;
