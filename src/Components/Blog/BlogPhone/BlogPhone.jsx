import "./BlogPhone.scss";
import { useState, useEffect } from "react";
import BlogCard from "../BlogCard/BlogCard";
export default function BlogPhone({
  allCat,
  filteredPhoneCat,
  setFilteredPhoneCat,
  phData,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectIndx = (index) => {
    setSelectedIndex(index);
  };

  // filteration ------------------------------------------------->
  useEffect(() => {
    if (selectedIndex === 0) setFilteredPhoneCat(phData?.blog_pages?.data);
    else
      setFilteredCat(
        phData?.blog_pages?.data?.filter(
          (item) =>
            item?.attributes?.Tags?.[0] ===
            phData?.Categories?.[selectedIndex]?.name
        )
      );
  }, [selectedIndex]);

  return (
    <div
      className="main-blogPhone"
      style={window.innerWidth > 900 ? { display: "none" } : {}}
    >
      <div className="row">
        {allCat?.map((val, i) => {
          return (
            <span
              style={
                selectedIndex === i
                  ? { borderBottom: "1.2px solid black", color: "black" }
                  : {}
              }
              onClick={() => selectIndx(i)}
            >
              {val.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
