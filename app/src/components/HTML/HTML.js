import { useState } from 'react';
import { Row, Col, Card } from 'antd';
import data from '../../data/html';
import SubList from '../SubList';
import HTMLContent from './components/HTMLContent';
import './HTML.scss';

const HTML = () => {
  const [content, setContent] = useState('');
  return (
    <>
      <Row gutter={[16, 16]}>
        {data.mainPageData.map((item) => (
          <Col xs={24} md={12} key={item.id}>
            <Card title={item.title} className='card'>
              <SubList item={item} setContent={setContent} />
            </Card>
          </Col>
        ))}
      </Row>
      {content && (
        <Row style={{ marginTop: 16 }}>
          <Col xs={24}>
            <HTMLContent content={content} />
          </Col>
        </Row>
      )}
    </>
  );
};

export default HTML;
