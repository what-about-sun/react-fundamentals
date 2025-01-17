import PropTypes from 'prop-types';

const LoadingIndicator = ({ loadingState }) => {
  return <h3>{loadingState}</h3>;
};

LoadingIndicator.propTypes = {
  loadingState: PropTypes.node.isRequired,
}

export default LoadingIndicator;
