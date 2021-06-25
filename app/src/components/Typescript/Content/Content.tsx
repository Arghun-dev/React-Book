import Fundamentals from './Fundamentals/Fundamentals';

type ContentType = {
  content: string;
};

const Content = ({ content }: ContentType) => {
  return <>{content === 'The Fundamentals' && <Fundamentals />}</>;
};

export default Content;
