import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../images/sort.png";

const SearchCountResults = ({ title, onClick }) => {
  const handler = () => {};
  const clickMe = (key) => {
    localStorage.setItem("sortType", key);
    onClick();
  };
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="subtitle">{title}</div>
      <div className="search-count-text d-flex">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt="sh"
              />
              ترتيب بحسب
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div
              onClick={() => clickMe("")}
              className="border-bottom card-filter-item"
            >
              بدون ترتيب
            </div>
            <div
              onClick={() => clickMe("الاكثر مبيعا")}
              className="border-bottom card-filter-item"
            >
              الاكثر مبيعا
            </div>
            <div
              onClick={() => clickMe("الاعلى تقييما")}
              className="border-bottom card-filter-item"
            >
              الاعلى تقييما
            </div>
            <div
              onClick={() => clickMe("السعر من الاقل للاعلى")}
              className="border-bottom card-filter-item"
            >
              السعر من الاقل للاعلى
            </div>
            <div
              onClick={() => clickMe("السعر من الاعلى للاقل")}
              className="border-bottom card-filter-item"
            >
              السعر من الاعلى للاقل
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResults;
