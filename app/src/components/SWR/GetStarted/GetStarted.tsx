import { Row, Col, Card } from 'antd';
import Code from 'components/CodeSyntax';
import Paragraph from 'components/Paragraph';
import Title from 'components/Title';

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
          <Code>{`
          import useSWR from 'swr';

          const App = () => {
            const { data, error } = useSWR(url, fetcher);

            if (error) return <h1>Something Went Wring</h1>

            if (!data) return <div>loading...</div>

            return (
              <div>{data}</div>
            )
          } 
          `}</Code>
          <Title>Make it reusable</Title>
          <Paragraph>
            When building a web app, you might need to reuse the data in many places
            of the UI. It is incredibly easy to create reusable data hooks on top of
            SWR:
          </Paragraph>
          <Code>{`
          import useSWR from 'swr'

          function useUser(id) {
            const { data, error } = useSWR('someURL' + id, fetcher);
            
            return {
              user: data,
              isLoading: !error & !data,
              hasError: error
            }
          }
          `}</Code>
          <Paragraph>And use it in your component</Paragraph>
          <Code>{`
          import useUser from 'hooks/useUser';

          function Avatar({ id: number | string }) {
            const { user, isLoading, hasError } = useUser(id);

            if (isLoading) return <div>loading...</div>
            if (hasError) return <div>something went wrong</div>

            return <img src={user.avatar} />
          }
          `}</Code>
        </Col>
      </Row>
    </Card>
  );
};

export default GetStarted;
