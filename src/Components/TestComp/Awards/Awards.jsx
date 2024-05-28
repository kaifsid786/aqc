import "./Awards.scss";
import img1 from "/01.svg";
import img2 from "/02.svg";
import img3 from "/03.svg";
import img4 from "/04.svg";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function Awards({ TechHead, TechMeth }) {
  const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  return (
    <>
      <div className="main-techComp">
        <div className="content">
          {ReactHtmlParser(TechHead)}
          <div className="process">
            {TechMeth?.map((val, index) => {
              return (
                <div className="card">
                  <div className="num">
                    {" "}
                    <h6>
                      <img src={`${ImgURL}${val?.Image?.data?.attributes?.url}`} alt="" />
                    </h6>
                  </div>
                  <h3>{val?.Heading}</h3>
                  <p>{val?.Description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
