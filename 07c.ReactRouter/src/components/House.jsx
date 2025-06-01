import { useLocation } from "react-router-dom";
import currencyFormatter from "../helpers/currencyFormatter";

const House = () => {
  const location = useLocation();
  const house = location.state?.house;

  if (!house) {
    return <div>Kein Haus ausgewählt oder keine Daten vorhanden.</div>;
  }

  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <img
              className="img-fluid"
              src={
                house.photo
                  ? `./houseImages/${house.photo}.jpeg`
                  : "./defaultphoto.png"
              }
              alt="House pic"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="row mt-2">
            <h5 className="col-12">{house.country}</h5>
          </div>
          <div className="row">
            <h3 className="col-12">{house.address}</h3>
          </div>
          <div className="row">
            <h2 className="themeFontColor col-12">
              {currencyFormatter.format(house.price)}
            </h2>
          </div>
          <div className="row">
            <div className="col-12 mt-3">{house.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default House;
