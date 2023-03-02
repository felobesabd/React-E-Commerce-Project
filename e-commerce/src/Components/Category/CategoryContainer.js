import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./../../Redux/Actions/categoryAction";

const CategoryContainer = ({ data, loading }) => {
  const colors = [
    "#0abde3",
    "#b2bec3",
    "#ee5253",
    "#0984e3",
    "#55efc4",
    "#a1813c",
  ];

  return (
    <Container>
      <div className="admin-content-text mt-3">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <CategoryCard
                  id={item._id}
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[Math.floor(Math.random() * 5) + 1]}
                />
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner className="m-auto" animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
