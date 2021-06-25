import { Row, Typography, Card, Col } from 'antd';
import Note from 'components/Note';
import Code from 'components/CodeSyntax';
import Highlight from 'components/Highlight';

const { Paragraph, Title } = Typography;

const Introduction = () => {
  return (
    <Card title='Introduction'>
      <Row style={{ marginBottom: 40 }}>
        <Col xs={24}>
          <Paragraph>
            The name “SWR” is derived from stale-while-revalidate, a HTTP cache
            invalidation strategy popularized by HTTP RFC 5861. SWR is a strategy to
            first return the data from cache (stale), then send the fetch request
            (revalidate), and finally come with the up-to-date data.
          </Paragraph>
          <Note>
            With SWR, components will get a stream of data updates constantly and
            automatically. And the UI will be always fast and reactive.
          </Note>
          <Code>
            {`
          import useSWR from 'swr'

          function Profile() {
            const { data, error } = useSWR('/api/user', fetcher)
          
            if (error) return <div>failed to load</div>
            if (!data) return <div>loading...</div>
            return <div>hello {data.name}!</div>
          }
          `}
          </Code>
          <Paragraph>
            In this example, the useSWR hook accepts a{' '}
            <Highlight>key string</Highlight> and a <Highlight>fetcher</Highlight>{' '}
            function. key is a unique identifier of the data (normally the API URL)
            and will be passed to fetcher. fetcher can be any asynchronous function
            which returns the data, you can use the native fetch or tools like Axios.
          </Paragraph>
          <Title style={{ marginTop: '0.5em' }}>Features</Title>
          <ul>
            <li>Jamstack oriented</li>
            <li>Fast, lightweight and reusable data fetching</li>
            <li>Built-in cache and request deduplication</li>
            <li>Real time experience</li>
            <li>Transport and protocol agnostic</li>
            <li>TypeScript ready</li>
            <li>React Native</li>
          </ul>
        </Col>
      </Row>
    </Card>
  );
};

export default Introduction;
