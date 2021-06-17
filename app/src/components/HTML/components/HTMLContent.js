import PropTypes from 'prop-types';
import ImagesInHTML from './ImagesInHTML/ImagesInHTML';

const HTMLContent = ({ content }) => {
  return <>{content === 'images-in-html' && <ImagesInHTML content={content} />}</>;
};

HTMLContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default HTMLContent;
