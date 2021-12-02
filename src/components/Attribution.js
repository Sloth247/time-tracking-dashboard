// styles
import "./Attribution.scss";

export default function Attribution() {
  const urlFEM = "https://www.frontendmentor.io?ref=challenge";
  const urlMe = "https://www.frontendmentor.io/profile/Sloth247";
  return (
    <div>
      <div className="attribution">
        Challenge by{" "}
        <a href={urlFEM} target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href={urlMe}>Yuko Horita</a>.
      </div>
    </div>
  );
}
