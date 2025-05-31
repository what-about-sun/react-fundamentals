import Banner from "./components/Banner"
import "./App.css"
import HouseList from "./components/HouseList";

function App() {
  return (
    <>
      <Banner>
        <div>
          Providing houses all over the world, and may be in the univers -- I was here :-)
        </div>    
      </Banner>
      <HouseList/>
    </>
  );
}

export default App
