import { useState } from "react";
import HouseRow from "./HouseRow";

const houseArray = [
  {
    id: 1,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    price: 900000,
  },
  {
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 500000,
  },
  {
    id: 3,
    address: "123 A-Street",
    country: "A-Land",
    price: 12,
  },
];

const HouseList = () => {
  const [houses, setHouses] = useState(houseArray);
  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 6,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market - I was also here in the HouseList.jsx :-)
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map(h => <HouseRow key={h.id} house={h} />)}
        </tbody>
      </table>
      <button onClick={addHouse} className="btn btn-primary">
        Add, if you like
      </button>
      <div>
        or
      </div>
      <div>
      <button onClick={addHouse} className="btn btn-primary">
        2nd Add
      </button>
      </div>
            <div>
        or
      </div>
      <div>
      <button className="btn btn-primary">
        to nothing
      </button>
      </div>

    </>
  );
};

export default HouseList;
