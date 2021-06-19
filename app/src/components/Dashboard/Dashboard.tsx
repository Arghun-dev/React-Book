import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import dashboard from '../../data/side-menu';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <Row gutter={[16, 16]}>
      {dashboard.dashboardCards.map((item) => (
        <Col xs={24} md={12} lg={8} key={item.id}>
          <Link to={item.link} className='root'>
            <Card className='card' title={item.title} hoverable>
              {item.content}
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard;
