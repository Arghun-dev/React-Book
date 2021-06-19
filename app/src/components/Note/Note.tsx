import PropTypes from 'prop-types';
import './Note.scss';

const Note = ({ children }) => {
  return (
    <div className='noteRoot'>
      <h4>Note:</h4>
      <p>{children}</p>
    </div>
  );
};

Note.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Note;
