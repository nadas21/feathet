import mehmonxona from "../../../../img/mehmonxona.png"
import yonoxona from "../../../../img/uy2.png"
import choy from "../../../../img/choy.png"
import parta from "../../../../img/parta.png"
import "./main.css"


export const Section = () => {
  return (
    <>
      <section className="section">
      <div className="container">
        <div className="section-innner">
            <div className="section-box">
                <h2 className="section-h2">Shop by Room</h2>
            </div>
            <div className="section-item-card">
            <div className="section-card">
                    <img src={mehmonxona} alt="" />

                <h3 className="section-h3">Living Room</h3>
            </div>
            <div className="section-card">
                    <img src={yonoxona} alt="" />
                <h3 className="section-h3">Living Room</h3>
            </div>
            <div className="section-card">
                    <img src={choy} alt="" />
                <h3 className="section-h3">Living Room</h3>
            </div>
            <div className="section-card">
                    <img src={parta} alt="" />
                <h3 className="section-h3">Living Room</h3>
            </div>
            </div>
            
        </div>
      </div>
      </section>
    </>
  );
};
