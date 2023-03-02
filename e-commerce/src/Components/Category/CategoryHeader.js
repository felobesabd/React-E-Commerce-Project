import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import AllCategoryPageHook from "../../hook/category/all-category-page-hook";
import { Link } from "react-router-dom";

const CategoryHeader = () => {
  const [category, loading, pageCount, getPage] = AllCategoryPageHook();

  const [catItems, setCatItems] = useState("");

  useEffect(() => {
    if (category) {
      setCatItems(category.data);
    }
  }, [category]);

  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            {catItems
              ? catItems.map((item, index) => {
                  return (
                    <Link
                      to={`/products/category/${item._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div key={index} className="cat-text-header">
                        {item.name}
                      </div>
                    </Link>
                  );
                })
              : null}

            <Link to="/allcategory" style={{ textDecoration: "none" }}>
              <div className="cat-text-header">المزيد</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
