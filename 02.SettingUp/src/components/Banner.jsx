import logo from "../assets/GloboLogo.png"

const Banner = () => {
  return (
    <header>
      <div> 
        <img src={logo} alt="logo" />
      </div>
      <div>
        Providing houses all over the world, and may be in the univers -- I was here :-)       
      </div>
    </header>
  ); /*here are two div elements*/
}
/*export makes the Banner-Componet available in other component*/
export default Banner;