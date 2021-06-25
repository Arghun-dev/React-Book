import { useHistory } from 'react-router-dom';
import { subListType } from 'types/sideMenuTypes';
import './SubList.scss';

type subListItemType = {
  id: number;
  title: string;
  content: string;
};

const SubList = ({ item }: subListType) => {
  const history = useHistory();
  return (
    <ul>
      {item.list.map((listItem: subListItemType) => (
        <li key={listItem.id}>
          <button onClick={() => history.push('/html/images-in-html')}>
            {listItem.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SubList;
