import logo from "../assets/GloboLogo.png"
import {logo as logoClass} from "./Banner.module.css"

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

const Banner = () => {
  return (
    <header className="row mt-5">
      <div className="col-2">
        <img src={logo} className={logoClass} alt="logo" />
      </div>
      <div className="col-8 mt-4" style={subtitleStyle}>
        Providing houses all over the world, and may be in the univers -- I was here :-)
      </div>
    </header>
  );
}

export default Banner;