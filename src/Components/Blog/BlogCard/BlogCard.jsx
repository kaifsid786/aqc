import React from 'react'
import './BlogCard.scss'
import { useNavigate } from 'react-router-dom'
export default function BlogCard(props) {

  const navigate = useNavigate();
  const id = props?.AllContent?.attributes?.slug;
  // console.log(id);
  return (
    <div className="main-blogCard">
         <div className="left">
             <img src={props.img} alt="" />
         </div>
         <div className="right">
            <div className="top">
                <span>Markets</span>
                <span>BUSINESS</span>
                <span>{props.date}</span>
            </div>
            <h3> {props.title} </h3>
            <p>
               {props.des}
            </p>
            <button onClick={() => navigate(`/blog/${id}`)}>Read more &#8594;</button>
         </div>
    </div>
  )
}
