import './SubList.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const SubList = ({ item }) => {
  const history = useHistory();
  return (
    <ul>
      {item.list.map((listItem) => (
        <li key={listItem.id} onClick={() => history.push('/html/images-in-html')}>
          {listItem.title}
        </li>
      ))}
    </ul>
  );
};

SubList.propTypes = {
  item: PropTypes.array.isRequired,
};

export default SubList;
