import PropTypes from 'prop-types';

const ExampleLayout = ({ children }) => {
  return (
    <div>
      <h1>Example Layout</h1>
      {children}
    </div>
  );
};

ExampleLayout.propTypes = {
  children: PropTypes.node,
};

export default ExampleLayout;
