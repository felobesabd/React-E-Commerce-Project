import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";
import GetAllUserOrdersHook from "./../../hook/user/get-all-user-orders-hook";
import Pagination from "../Utilities/Pagination";

const UserAllOrder = () => {
  const [userName, results, pagination, orderData, OnPress] =
    GetAllUserOrdersHook();

  console.log(pagination.numberOfPages);

  return (
    <div>
      <div className="admin-content-text pb-4">
        أهلا {userName} ... عدد الطلبات الخاصة بك( {results} )
      </div>
      <Row className="justify-content-between">
        {orderData.length >= 1 ? (
          orderData.map((orderItem, index) => {
            return <UserAllOrderItem key={index} orderItem={orderItem} />;
          })
        ) : (
          <h6>لا يوجد طلبات حتى الان</h6>
        )}
        {pagination.numberOfPages >= 2 ? (
          <Pagination
            onPress={OnPress}
            pageCount={pagination.numberOfPages ? pagination.numberOfPages : 0}
          />
        ) : null}
      </Row>
    </div>
  );
};

export default UserAllOrder;
