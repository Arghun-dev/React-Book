import React from 'react';
import { Row, Col } from 'antd';
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

type ContainerProps = {
  children: React.ReactNode;
  fluid: boolean;
  className: string;
};

const Container = ({ children, fluid, ...props }: ContainerProps) => {
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

export default Container;
