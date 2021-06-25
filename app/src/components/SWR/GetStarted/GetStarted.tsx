import { Row, Col, Card, Typography } from 'antd';
import Code from 'components/CodeSyntax';

const { Title, Paragraph } = Typography;

const GetStarted = () => {
  return (
    <Card title='Get Started'>
      <Row>
        <Col xs={24}>
          Installation
          <Code>yarn add swr</Code>
          <Title>Quick Start</Title>
          <Paragraph>
            For normal RESTful APIs with JSON data, first you need to create a
            fetcher function, which is just a wrapper of the native fetch:
          </Paragraph>
          <Code>{`const fetcher = (...args) => fetch(...args).then(res => res.json())`}</Code>
          <Paragraph>
            Then you can import useSWR and start using it inside any function
            components:
          </Paragraph>
        </Col>
      </Row>
    </Card>
  );
};

export default GetStarted;
