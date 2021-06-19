import PropTypes from 'prop-types';
import './List.scss';

const List = ({ list }) => {
  return (
    <div className='list-root'>
      {list.map((listItem) => (
        <div key={listItem}>
          <h3 className='title'>{listItem.title}</h3>
          <p className='text'>{listItem.text}</p>
        </div>
      ))}
    </div>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
};

export default List;
