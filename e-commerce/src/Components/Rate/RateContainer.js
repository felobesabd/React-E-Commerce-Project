import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "./../Utilities/Pagination";
import ViewAllReviewsHook from "./../../hook/review/view-all-reviews-hook";
import { useParams } from "react-router-dom";

const RateContainer = ({ rateAvg, rateQty }) => {
  const { id } = useParams();
  const [allReviews, OnPress] = ViewAllReviewsHook(id);

  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="subtitle d-inline p-1">التقييمات</div>
          <img
            className="mt-2"
            src={rate}
            alt="rate"
            height="16px"
            width="16px"
          />
          <div className="cat-rate d-inline p-1 pt-2">{rateAvg}</div>
          <div className="rate-count d-inline p-1 pt-2">
            ({`${rateQty} تقييم`})
          </div>
        </Col>
      </Row>
      <RatePost />

      {allReviews.data ? (
        allReviews.data.map((review, index) => {
          return <RateItem key={index} review={review} />;
        })
      ) : (
        <h6>لا يوجد تقييمات</h6>
      )}

      {allReviews.paginationResult &&
      allReviews.paginationResult.numberOfPages >= 2 ? (
        <Pagination
          pageCount={
            allReviews.paginationResult
              ? allReviews.paginationResult.numberOfPages
              : 0
          }
          onPress={OnPress}
        />
      ) : null}
    </Container>
  );
};

export default RateContainer;
