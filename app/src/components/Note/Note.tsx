import PropTypes from 'prop-types';
import './Note.scss';

type NoteProps = {
  children: any;
};

const Note = ({ children }: NoteProps) => {
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
