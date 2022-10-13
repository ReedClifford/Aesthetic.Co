import React from "react";
import CategorySet1 from "../../components/Categories/CategorySet1";
import CategorySet2 from "../../components/Categories/CategorySet2";

const MainDirectory = () => {
  return (
    <React.Fragment>
      <div className="categories-main-container">
        <div className="category2-container">
          <CategorySet2 />
        </div>
        <div className="category1-container">
          <CategorySet1 />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainDirectory;
