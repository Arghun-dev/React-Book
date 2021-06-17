import { Row, Col, Card } from 'antd';
import data from '../../data/html';
import SubList from '../SubList';
import './HTML.scss';

const HTML = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        {data.mainPageData.map((item) => (
          <Col xs={24} md={12} key={item.id}>
            <Card title={item.title} className='card'>
              <SubList item={item} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HTML;
