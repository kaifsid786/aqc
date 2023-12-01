import "./Blog.scss";

export default function Blog() {
  return (
    <>
      <div className="main-blog">
           <div className="wrapper">
            <h3>The latest in <span style={{color:"#10C08E"}}>Nutritional Universe</span></h3>
            <div className="cards">
                  <div className="card">
                     <img src="/blog1.png" alt="" />
                     <h6>Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity</h6>
                     <p>Read on our blog</p>
                  </div>
                  <div className="card">
                     <img src="/blog2.png" alt="" />
                     <h6>Revolutionary Research Unveils New Insights into Gut-Brain Connection for Optimal Mental Health</h6>
                     <p>Read on our blog</p>
                  </div>
                  <div className="card">
                     <img src="/blog3.png" alt="" />
                     <h6>Breakthrough Discovery: Superfood Extracts Found to Potentially Enhance Longevity and Vitality</h6>
                     <p>Read on our blog</p>
                  </div>
            </div>
           </div>
      </div>
    </>
  )
}
