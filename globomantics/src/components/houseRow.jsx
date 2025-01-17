import currencyFormatter from "../helpers/currencyFormatter";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const HouseRow = ({ house }) => {
  const navigate = useNavigate();
  return (
    <tr onClick={() => navigate("/house", { state: {house}})}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
          {currencyFormatter.format(house.price)}
        </td>
      )}
    </tr>
  );
};

HouseRow.propTypes = {
  house: PropTypes.shape({
    address: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default HouseRow;
