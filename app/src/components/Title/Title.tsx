import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

type CustomTitleProps = {
  children: React.ReactChild;
};

const CustomTitle = ({ children }: CustomTitleProps) => {
  return <Title style={{ margin: '24px 0 24px 0' }}>{children}</Title>;
};

export default CustomTitle;
