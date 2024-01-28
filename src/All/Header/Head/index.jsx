import uy from "../../../img/uy.png"
import "./main.css";

export const Head = () => {
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-box">
            <h1 className="hero-text">Curated and Convenient</h1>
            <p className="text-p">
              We've built our offerings on the principle that everyone deserves
              high-quality design without the high cost. We offer elevated
              rental inventory, to transform your space. Reuse and recycle - we
              make the decision as light as a “feather”
            </p>
            <button className="hero-btn">Get Started</button>
          </div>
          <div className="hero-img">
            <img src={uy} alt="img" className="img" width={628} height={611} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
