import './SubList.scss';
import PropTypes from 'prop-types';

const SubList = ({ item, setContent }) => {
  return (
    <ul>
      {item.list.map((listItem) => (
        <li key={listItem.id} onClick={() => setContent(listItem.content)}>
          {listItem.title}
        </li>
      ))}
    </ul>
  );
};

SubList.propTypes = {
  item: PropTypes.array.isRequired,
  setContent: PropTypes.func,
};

export default SubList;
