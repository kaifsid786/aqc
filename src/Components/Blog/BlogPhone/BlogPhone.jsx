import "./BlogPhone.scss";
import { useEffect, useState } from "react";
export default function BlogPhone({ allCat, phF, sPhF }) {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [clickedIndexT, setClickedIndexT] = useState(0);

  const isClicked = (index) => {
    // Check if the current element is clicked
    return index === clickedIndex;
  };
  const isClickedT = (index) => {
    // Check if the current element is clicked
    return index === clickedIndexT;
  };

  const Cat = [
    "All Category",
    "Nutrition",
    "Guide",
    "Marketing",
    "Nutritional Food",
    "Nutritional Beverages",
    "Food Science",
  ];
  const tag = [
    "All",
    "Health",
    "Campaign",
    "Spray Drying",
    "Manufactured Vitamins",
    "Nutrition",
  ];

  // Filterartion
  const [selectedCat, setSelectedCat] = useState(Cat[0]);
  const [selectedTag, setSelectedTag] = useState(tag[0]);

  const handleClick = (index) => {
    // Update the clickedIndex to the current clicked element
    setClickedIndex(index);
    setSelectedCat(Cat[index]);
  };
  const handleClickT = (index) => {
    // Update the clickedIndex to the current clicked element
    setClickedIndexT(index);
    setSelectedTag(tag[index]);
  };

  useEffect(() => {
    if (selectedCat === Cat[0] && selectedTag === tag[0]) sPhF(allCat);
    else
      sPhF(
        allCat.filter((data) => {
          return (
            selectedCat === "" ||
            data.cat === selectedCat ||
            selectedTag === "" ||
            data.tag === selectedTag
          );
        })
      );
  }, [selectedCat, selectedTag]);
  console.log(allCat);
  console.log(phF);
  console.log(selectedTag);

  return (
    <div
      className="main-blogPhone"
      style={window.innerWidth > 900 ? { display: "none" } : {}}
    >
      <div className="row">
        {Cat.map((val, i) => {
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
        {Cat.map((val, i) => {
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
        {Cat.map((val, i) => {
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
