// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Test = ({ title }) => <div data-title={title} />;

Test.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Test;
