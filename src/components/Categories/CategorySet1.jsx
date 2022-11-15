import React from "react";
import { Link } from "react-router-dom";
import cap from "../../assets/category-assets/cap-category.jpg";
import jacket from "../../assets/category-assets/jackets-category.jpg";
import shoes from "../../assets/category-assets/shoes-category.jpg";

const CategorySet1 = () => {
  const categoryDetails = [
    { title: "JACKETS", id: "1", url: jacket },
    { title: "SNEAKERS", id: "2", url: shoes },
    { title: "HATS", id: "3", url: cap },
  ];

  const renderedCategories = categoryDetails.map(({ title, id, url }) => {
    return (
      <Link to={`shop/${title.toLowerCase()}`}>
        <div key={id} className="card-container">
          <div className="card-info-container">
            <h1 className="font-semibold text-xl">{title}</h1>
            <p className="text-sm">Check Items</p>
          </div>

          <img src={url} alt={title} className="card-bg-img" />
        </div>
      </Link>
    );
  });
  return <React.Fragment>{renderedCategories}</React.Fragment>;
};

export default CategorySet1;
