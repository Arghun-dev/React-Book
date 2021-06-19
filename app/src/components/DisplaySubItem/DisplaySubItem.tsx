import PropTypes from 'prop-types';
import './DisplaySubItem.scss';

const DisplaySubItem = ({ children }) => {
  return <div className='displaySubItemRoot'>{children}</div>;
};

DisplaySubItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DisplaySubItem;
