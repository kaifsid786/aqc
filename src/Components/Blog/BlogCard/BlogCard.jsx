import React from 'react'
import './BlogCard.scss'
export default function BlogCard(props) {
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
            <button>Read more &#8594; </button>
         </div>
    </div>
  )
}
