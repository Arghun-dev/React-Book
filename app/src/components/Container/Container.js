import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import cs from 'classnames';
import './Container.scss';

const responsiveOptions = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 23,
  xl: 19,
  xxl: 17,
};

const Container = ({ children, fluid, ...props }) => {
  const colProps = () => {
    if (fluid) return { span: 24 };
    return responsiveOptions;
  };
  return (
    <Row
      justify='center'
      {...props}
      className={cs([fluid ? 'containerFluid' : 'container', props.className])}
    >
      <Col {...colProps()}>{children}</Col>
    </Row>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  className: PropTypes.string,
};

export default Container;
