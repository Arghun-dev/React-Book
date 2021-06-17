import { Row, Col, Card } from 'antd';
import data from '../../data/html';
import './HTML.scss';

const HTML = () => {
  return (
    <Row gutter={[16, 16]}>
      {data.mainPageData.map((item) => (
        <Col xs={24} md={12} key={item.id}>
          <Card title={item.title} className='card'>
            <ul>
              {item.list.map((listItem) => (
                <li key={listItem.id}>{listItem.title}</li>
              ))}
            </ul>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default HTML;
