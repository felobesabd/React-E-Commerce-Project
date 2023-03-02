import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./../../Redux/Actions/categoryAction";
const HomeCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  //Get the Last Category state from Redux
  const category = useSelector((state) => state.allCategory.category);
  //Get the Last Loading state from Redux
  const loading = useSelector((state) => state.allCategory.loading);

  const colors = [
    "#0abde3",
    "#b2bec3",
    "#ee5253",
    "#5f27cd",
    "#0984e3",
    "#55efc4",
  ];
  return [loading, category, colors];
};

export default HomeCategoryHook;
