import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "./../../hook/products/view-product-details-hook";

const ProductGallery = () => {
  const { id } = useParams();
  const [item, images, cat, brand] = ViewProductDetailsHook(id);
  return (
    <div className="product-gallery-card d-flex justify-content-center align-items-center">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        isRTL={true}
        renderLeftNav={LeftButton}
        renderRightNav={RightButton}
      />
    </div>
  );
};

export default ProductGallery;
