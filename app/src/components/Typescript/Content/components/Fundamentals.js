import { Typography } from 'antd';
import CodeSyntax from '../../../CodeSyntax';

const { Title } = Typography;

const Fundamentals = () => {
  return (
    <div>
      <Title>Common Types</Title>
      <CodeSyntax>
        {`onSubmit(e) {
          e.preventDefault();
          const job = {
            title: 'Developer',
            company: 'Facebook' 
            };
          }`}
      </CodeSyntax>
    </div>
  );
};

export default Fundamentals;
