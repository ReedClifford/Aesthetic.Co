import React from "react";
import men from "../../assets/category-assets/men-category.jpg";
import women from "../../assets/category-assets/women-category.jpg";
const CategorySet2 = () => {
  const categoryDetails = [
    { title: "WOMENS", id: "1", url: women },
    { title: "MENS", id: "2", url: men },
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

export default CategorySet2;
