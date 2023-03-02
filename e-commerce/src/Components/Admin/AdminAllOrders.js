import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOrderItem from "./AdminAllOrderItem";
import GetAllUserOrdersHook from "./../../hook/user/get-all-user-orders-hook";
import Pagination from "../Utilities/Pagination";

const AdminAllOrders = () => {
  const [userName, results, pagination, orderData, OnPress] =
    GetAllUserOrdersHook();
  return (
    <div>
      <div className="admin-content-text">إدارة جميع الطلبات</div>
      <Row className="justify-content-start">
        {orderData.length >= 1 ? (
          orderData.map((orderItem, index) => {
            return <AdminAllOrderItem orderItem={orderItem} key={index} />;
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

export default AdminAllOrders;
