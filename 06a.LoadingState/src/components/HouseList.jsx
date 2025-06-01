import loadingStatus from "../helpers/loadingStatus";
import useHouses from "../hooks/useHouses";
import HouseRow from "./HouseRow";
import LoadingIndicator from "./LoadingIndicator";

const HouseList = ({selectHouse}) => {
  const { houses, setHouses, loadingState } = useHouses();

  if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />

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
          Houses currently on the market - click on a house to see details - thanks!
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
          {houses.map(h => <HouseRow key={h.id}
            selectHouse={selectHouse} house={h} />)}
        </tbody>
      </table>
      <button onClick={addHouse} className="btn btn-primary">
        Add
      </button>
    </>
  );
};

export default HouseList;
