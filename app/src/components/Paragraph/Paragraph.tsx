import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

type CustomParagraphProps = {
  children: React.ReactNode;
};

const ParagraphTitle = ({ children }: CustomParagraphProps) => {
  return <Paragraph style={{ margin: '24px 0 24px 0' }}>{children}</Paragraph>;
};

export default ParagraphTitle;
