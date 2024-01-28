import room from "../img/room.png"
import maydomal from "../img/mydomal.png"
import minab from "../img/minab.png"
import forbes from "../img/forbes.png"
import fest from "../img/fest.png"
import "./main.css";

export const Room = () => {
  return (
    <>
      <section className="section">
        <div className="container">
        <div className="room-inner">
            <h2 className="room-text">Ease the pain of moving from apartment to apartment.</h2>
<div className="room-list">
    <ul className="room-link">
        <li className="room-list-link">
<img className="room-link-img" src={room} alt="" />
        </li>
        <li className="room-list-link">
<img className="room-link-img" src={maydomal} alt="" />
        </li>
        <li className="room-list-link">
<img className="room-link-img" src={minab} alt="" />
        </li>
        <li className="room-list-link">
<img className="room-link-img" src={forbes} alt="" />
        </li>
        <li className="room-list-link">
<img className="room-link-img" src={fest} alt="" />
        </li>
    </ul>
</div>

        </div>
        </div>
      </section>
    </>
  );
};
