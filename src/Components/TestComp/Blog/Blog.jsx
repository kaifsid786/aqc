import { useNavigate } from "react-router-dom";
import "./Blog.scss";
export default function Blog({ blogs }) {
  const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  const navigate=useNavigate();
  return (
    <>
      <div className="main-blog">
        <div className="wrapper">
          <h3>
            The latest in{" "}
            <span style={{ color: "#10C08E" }}>Nutrition Universe</span>
          </h3>
          <div className="cards">
            {Array.isArray(blogs) &&
              blogs?.map((val, index) => {
                return (
                  <div className="card">
                    <img src={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`} alt="" />
                    <h6>
                      {val?.attributes?.Heading}
                    </h6>
                    <p onClick={()=>navigate(`/blog/${val?.attributes?.slug}`)}>Read on our blog</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
