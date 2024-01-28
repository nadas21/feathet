import it from "../img/it.png";
import sumka from "../img/sumka.png";
import ofice from "../img/office.png";
import daraxt from "../img/daraxt.png";
import "./main.css";

export const Card = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="Card-inner">
            <div className="card-box">
              <div className="card-title">
                <h3 className="card-h3">
                  Enjoy a fully furnished space in less than week
                </h3>
                <p className="card-p">
                  Feather furniture is available to be delivered and assembled
                  in New York City, Los Angeles and San Francisco.
                </p>
                <h4 className="card-h4">Explore Furniture</h4>
              </div>
              <img
                className="card-sumka"
                src={it}
                alt=""
                width={616}
                height={441}
              />
            </div>
            <div className="card-box">
              <img src={sumka} alt="" width={616} height={616} />
              <div className="card-title">
                <h3 className="card-h3">Garage Sale - 40% & Up</h3>
                <p className="card-p">
                  Our Garage Sale is open! Savings start at 40% on favorite
                  retired pieces. Find dressers, sofas, decor, and more to make
                  the year one to remember.
                </p>
                <h4 className="card-text-h4">
                  Terms and conditions apply. View here.
                </h4>
                <h4 className="card-h4">Shop Now</h4>
              </div>
            </div>
            <div className="card-box">
              <div className="card-title">
                <h3 className="card-h3">
                  Furniture for business, made simple.
                </h3>
                <p className="card-p">
                  Say goodbye to cost, complexity, and commitment of furniture.
                  Feather makes it easy with affordable rental plans, white
                  glove delivery and best-in-class account service.
                </p>
                <h4 className="card-h4">Visit Feather For Business</h4>
              </div>
              <img
                className="card-sumka"
                src={ofice}
                alt=""
                width={616}
                height={441}
              />
            </div>
            <div className="card-box">
              <img src={daraxt} alt="" width={616} height={616} />
              <div className="card-title">
                <h3 className="card-h3">Never assemble furniture again.</h3>
                <p className="card-p">
                  We move a lot. There are countless floor plans and roommates
                  (oh, and your evolving tastes) between here and there. With
                  Feather, furnish your space without breaking a sweat or
                  reaching for a screwdriver.
                </p>
                <h4 className="card-h4">How Feather Works</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
