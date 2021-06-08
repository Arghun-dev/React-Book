import { Row, Col, Card } from 'antd';
import dashboard from '../../data/dashboard';

const Dashboard = () => {
  return (
    <Row gutter={[16, 16]}>
      {dashboard.dashboardCards.map((item) => (
        <Col xs={24} md={12} lg={8} key={item.id}>
          <Card title={item.title}>asd</Card>
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard;
