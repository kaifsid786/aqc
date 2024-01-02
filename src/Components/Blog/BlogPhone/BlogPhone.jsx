import "./BlogPhone.scss";
import { useState } from "react";
export default function BlogPhone() {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [clickedIndexT, setClickedIndexT] = useState(0);
  const handleClick = (index) => {
    // Update the clickedIndex to the current clicked element
    setClickedIndex(index);
  };
  const handleClickT = (index) => {
    // Update the clickedIndex to the current clicked element
    setClickedIndexT(index);
  };
  const isClicked = (index) => {
    // Check if the current element is clicked
    return index === clickedIndex;
  };
  const isClickedT = (index) => {
    // Check if the current element is clicked
    return index === clickedIndexT;
  };

  const topMenu = [
    "All Category",
    "Nutrition",
    "Market",
    "Guide",
    "Nutritional Beverages",
    "Food Science",
    "Marketing Theory",
  ];
  const tag = [
    "Health",
    "Campaign",
    "Spray Drying",
    "Manufactured Vitamins",
    "Nutrition",
  ];

  return (
    <div
      className="main-blogPhone"
      style={window.innerWidth > 900 ? { display: "none" } : {}}
    >
      <div className="row">
        {topMenu.map((val, i) => {
          return i <= 3 ? (
            <span
              onClick={() => handleClick(i)}
              style={
                isClicked(i)
                  ? { borderBottom: "1.5px solid black", color: "black" }
                  : {}
              }
            >
              {val}
            </span>
          ) : (
            ""
          );
        })}
      </div>
      <div className="row">
        {topMenu.map((val, i) => {
          return i > 3 && i <= 5 ? (
            <span
              onClick={() => handleClick(i)}
              style={
                isClicked(i)
                  ? { borderBottom: "1.5px solid black", color: "black" }
                  : {}
              }
            >
              {val}
            </span>
          ) : (
            ""
          );
        })}
      </div>
      <div className="row rowL">
        {topMenu.map((val, i) => {
          return i > 5 ? (
            <span
              onClick={() => handleClick(i)}
              style={
                isClicked(i)
                  ? { borderBottom: "1.5px solid black", color: "black" }
                  : {}
              }
            >
              {val}
            </span>
          ) : (
            ""
          );
        })}
        <span className="selectBlog">
          <select name="" id="">
            <option value="">Popular</option>
            <option value="">Latest</option>
            <option value="">Most Viewed</option>
          </select>
        </span>
      </div>

      <div className="row2">
        <h3>Tags</h3>
        <div className="row-2-content">
          {tag.map((val, i) => {
            return (
              <div
                className="content"
                onClick={() => handleClickT(i)}
                style={
                  isClickedT(i) ? { background: "#003E71", color: "white" } : {}
                }
              >
                {val}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
