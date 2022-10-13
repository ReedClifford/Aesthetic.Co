import React from "react";
import cap from "../../assets/category-assets/cap-category.jpg";
import jacket from "../../assets/category-assets/jackets-category.jpg";
import shoes from "../../assets/category-assets/shoes-category.jpg";

const CategorySet1 = () => {
  const categoryDetails = [
    { title: "JACKETS", id: "1", url: jacket },
    { title: "SNEAKERS", id: "2", url: shoes },
    { title: "ACCESORIES", id: "3", url: cap },
  ];

  const renderedCategories = categoryDetails.map(({ title, id, url }) => {
    return (
      <div
        key={id}
        className="card-container"
        onClick={() => console.log("clicked")}
      >
        <div className="card-info-container">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p className="text-sm">Check Items</p>
        </div>

        <img src={url} alt={title} className="card-bg-img" />
      </div>
    );
  });
  return <React.Fragment>{renderedCategories}</React.Fragment>;
};

export default CategorySet1;
