import React from "react";
import UserAddressCard from "./UserAddressCard";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewUserAddressHook from "./../../hook/user/view-user-address-hook";

const UserAllAddresses = () => {
  const [res] = ViewUserAddressHook();
  // if (res) {
  //   console.log(res.data);
  // }
  return (
    <div>
      <div className="admin-content-text pb-4">العناوين الشخصية</div>
      {res.data ? (
        res.data.map((item, index) => {
          return <UserAddressCard key={index} item={item} />;
        })
      ) : (
        <h6>لا يوجد عناوين حتى الان</h6>
      )}

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">إضافة عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAddresses;
