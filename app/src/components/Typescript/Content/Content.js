import PropTypes from 'prop-types';
import Fundamentals from './components/Fundamentals';

const Content = ({ content }) => {
  console.log('content', content);
  return <>{content === 'The Fundamentals' && <Fundamentals />}</>;
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
