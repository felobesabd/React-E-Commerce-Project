import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "./../../Redux/Actions/brandAction";
const HomeBrandHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
  }, []);

  //Get the Last Category state from Redux
  const brand = useSelector((state) => state.allBrands.brand);
  //Get the Last Loading state from Redux
  const loading = useSelector((state) => state.allBrands.loading);

  return [brand, loading];
};

export default HomeBrandHook;
