import stul from "../img/stul.png"
import javon from "../img/javon.png"
import stul2 from "../img/stul2.png"
import kireslo from "../img/kireslo.png"
import gul from "../img/gul.png"
import "./main.css"


export const Main = () => {
  return (
    <>
      <section className="section">
      <div className="container">
         <div className="main-inner">
          <h2 className="main-text-h2" >Shop our Bestsellers</h2>
          <div className="main-box">
            <ul className="main-list">
              <li className="main-link">
                 <img className="main-stul" src={stul} alt="" width={169} height={169} />
                 <h3 className="main-h3">Cooper Dining Table</h3>
                 <h4 className="main-h4">rent for $15/mo</h4>
                 <h4 className="main-h4">or buy for $359</h4>
                 <h4 className="main-h4">$314</h4>
              </li>
            </ul>
            <ul className="main-list">
              <li className="main-link">
                 <img className="main-stul" src={javon} alt="" width={169} height={169} />
                 <h3 className="main-h3">Croft Media Console</h3>
                 <h4 className="main-h4">rent for $15/mo</h4>
                 <h4 className="main-h4">or buy for $359</h4>
                 <h4 className="main-h4">$739</h4>
              </li>
            </ul>
            <ul className="main-list">
              <li className="main-link">
                 <img className="main-stul" src={stul2} alt="" width={169} height={169} />
                 <h3 className="main-h3">Essex Dining Chair</h3>
                 <h4 className="main-h4">rent for $15/mo</h4>
                 <h4 className="main-h4">or buy for $359</h4>
                 <h4 className="main-h4">$379</h4>
              </li>
            </ul>
            <ul className="main-list">
              <li className="main-link">
                 <img className="main-stul" src={kireslo} alt="" width={169} height={169} />
                 <h3 className="main-h3">Ludlow Sofa</h3>
                 <h4 className="main-h4">rent for $15/mo</h4>
                 <h4 className="main-h4">or buy for $359</h4>
                 <h4 className="main-h4">$1099</h4>
              </li>
            </ul>
          </div>
            <h4 className="main-item-text">Shop All Furniture</h4>
<div className="main-list">
  <div className="main-list-item">
    <img src={gul} alt=""  width={823} height={343}/>
    <ul className="main-lu">
      <li  className="main-li" >
 <h4 className="main-text-item-h4">feather FLOYD</h4>
 <p className="main-p-item">Floyd Furniture Meets Feather Flexibility</p>
 <button className="main-btn">Explore Floyd Furniture</button>
      </li>
    </ul>
  </div>
</div>
         </div>
      </div>
      </section>
    </>
  );
};
