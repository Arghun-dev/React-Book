import { useState } from 'react';
import { Row, Col, Card } from 'antd';
import DisplaySubItem from '../DisplaySubItem/DisplaySubItem';
import typescriptData from '../../data/typescript';
import Content from './Content/Content';

const TypescriptAndReact = () => {
  const [selectedContent, setSelectedContent] = useState('');
  return (
    <Row gutter={[16, 16]}>
      <Row gutter={[16, 16]}>
        {typescriptData.typescriptData[0].subMenu.map((item) => (
          <Col xs={24} md={12} lg={8} key={item.id}>
            <span onClick={() => setSelectedContent(item.title)}>
              <DisplaySubItem>{item.title}</DisplaySubItem>
            </span>
          </Col>
        ))}
      </Row>
      <Row style={{ width: '100%' }}>
        <Card title={selectedContent} size='small' style={{ width: '100%' }}>
          <Content content={selectedContent} />
        </Card>
      </Row>
    </Row>
  );
};

export default TypescriptAndReact;
