import './Awards.scss'

export default function Awards() {
  return (
      <>
         <div className="main-techComp">
               <div className="content">
                  <h3>Technologies</h3>
                  <p>
                     <span style={{fontWeight:"bold"}}>At AQC Chem. Lab Pvt. Ltd., innovation is in our DNA.</span> We harness a range of state- of- the- art technologies that redefine food science, enhancing product quality, efficacy, and consumer experience.
                  </p>
                  <div className="process">
                      <div className="card">
                         <div className="num"> <h6>1</h6></div>
                          <h3>Encapsulation:</h3>
                          <p>Safeguarding the goodness</p>
                      </div>
                      <div className="card">
                         <div className="num"> <h6>2</h6></div>
                          <h3>Spray Drying:</h3>
                          <p>The Art of Transformation</p>
                      </div>
                      <div className="card">
                         <div className="num"> <h6>3</h6></div>
                          <h3>Blending:</h3>
                          <p>The Art of Nutrient Synergy</p>
                      </div>
                      <div className="card">
                         <div className="num"> <h6>4</h6></div>
                          <h3>Granulation:</h3>
                          <p>Solidifying Quality</p>
                      </div>
                      <div className="card">
                         <div className="num"> <h6>5</h6></div>
                          <h3>Extrusion:</h3>
                          <p>Shaping Nutritional Excellence</p>
                      </div>
                  </div>
               </div>
         </div>
      </>
  )
}
