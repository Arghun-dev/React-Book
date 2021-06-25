import './List.scss';

type listType = {
  list: {
    title: string;
    text: string;
  }[];
};

const List = ({ list }: listType) => {
  return (
    <div className='list-root'>
      {list.map((listItem) => (
        <div key={listItem.title}>
          <h3 className='title'>{listItem.title}</h3>
          <p className='text'>{listItem.text}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
