import PropTypes from 'prop-types';
import './Highlight.scss';

const Highlight = ({ children }) => {
  return <span className='highlightRoot'>{children}</span>;
};

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Highlight;
