// styles
import "./MainCard.scss";

//images
import Avatar from "../assets/image-jeremy.png";

export default function MainCard() {
  return (
    <div className="header__avatar-container">
      <h1 className="sr-only">Time Tracking Dashboard for Jeremy Robson</h1>
      <div className="header__avatar-img-container">
        <img src={Avatar} alt="Jeremy Robson" className="header__avatar-img" />
      </div>
      <div className="header__name-container">
        <p className="header__report">Report for</p>
        <h2 className="header__name">Jeremy Robson</h2>
      </div>
    </div>
  );
}
