import yulduz from "../img/yulduz.png"

import "./main.css";

export const Start = () => {
  return (
    <>
      <section className="section">
        <div className="container">
       <h4 className="start-h4">The Reviews are In</h4>
       <div className="start-inner">
       <div className="start-box">
        <div className="start-list-box">
            <img className="satrt-yulduz" src={yulduz} alt="" />
           <p className="start-text-p">Honestly BEST EXPERIENCE moving ever.</p>
              <h4 className="start-item-h4">Julie San Francisco CA</h4>
        </div>
        <div className="start-list-box">
            <img className="satrt-yulduz" src={yulduz} alt="" />
           <p className="start-text-p">Honestly BEST EXPERIENCE moving ever.</p>
              <h4 className="start-item-h4">Julie San Francisco CA</h4>
        </div>
        <div className="start-list-box">
            <img className="satrt-yulduz" src={yulduz} alt="" />
           <p className="start-text-p">Honestly BEST EXPERIENCE moving ever.</p>
              <h4 className="start-item-h4">Julie San Francisco CA</h4>
        </div>
       </div>
       
       </div>
        </div>
      </section>
    </>
  );
};
