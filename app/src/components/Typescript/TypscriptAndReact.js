import { Row, Col, Card } from 'antd';
import DisplaySubItem from '../DisplaySubItem';

const TypescriptAndReact = () => {
  return (
    <Row gutter={[16, 16]}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} lg={8}>
          <DisplaySubItem>The Fundamentals</DisplaySubItem>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <DisplaySubItem>Interacting with components</DisplaySubItem>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <DisplaySubItem>Working with reducers</DisplaySubItem>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <DisplaySubItem>Color & Context</DisplaySubItem>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <DisplaySubItem>Just Enough Typescript</DisplaySubItem>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <DisplaySubItem>Higher Order Components</DisplaySubItem>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <DisplaySubItem>Advanced Component Patterns</DisplaySubItem>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <DisplaySubItem>Wrapping up</DisplaySubItem>
        </Col>
      </Row>
      <Row style={{ width: '100%' }}>
        <Card title='The fundamentals' size='small' style={{ width: '100%' }}>
          dfsf
        </Card>
      </Row>
    </Row>
  );
};

export default TypescriptAndReact;
