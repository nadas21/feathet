

import qiz from "../img/qiz.png"
import "./main.css";

export const Funter = () => {
  return (
    <>
      <section className="section">
        <div className="container">
         <div className="funter-inner">
            <img className="funter-qiz" src={qiz} alt="" />
            <p className="funter-p">Feather is the stress-free way to furnish your home</p>
            <button className="funter-btn">Shop Furniture</button>
         </div>
        </div>
      </section>
    </>
  );
};
