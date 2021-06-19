import Fundamentals from './Fundamentals/Fundamentals';

const Content = ({ content: string }) => {
  return <>{content === 'The Fundamentals' && <Fundamentals />}</>;
};

export default Content;
