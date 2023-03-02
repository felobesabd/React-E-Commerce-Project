import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer";
import Pagination from "../../Components/Utilities/Pagination";
import AllBrandPageHook from "../../hook/brand/all-brand-page-hook";
const AllBrandsPage = () => {
  const [brand, loading, pageCount, getPage] = AllBrandPageHook();
  return (
    <div style={{ minHeight: "670px " }}>
      <BrandContainer data={brand.data} loading={loading} />
      <Pagination pageCount={pageCount} onPress={getPage} />
    </div>
  );
};

export default AllBrandsPage;
