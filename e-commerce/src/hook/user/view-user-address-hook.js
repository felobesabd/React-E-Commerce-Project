import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddress } from "../../Redux/Actions/userAddressAction";

const ViewUserAddressHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllAddress());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector(
    (state) => state.userAddressReducer.getAllUserAddress
  );

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
      }
    }
  }, [loading]);

  return [res];
};

export default ViewUserAddressHook;
