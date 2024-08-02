// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

const ExamplePage = ({ ...props }) => {
  return (
    <div {...props}>
      <h1>Example Page</h1>
    </div>
  );
};

ExamplePage.propTypes = {};

export default ExamplePage;
