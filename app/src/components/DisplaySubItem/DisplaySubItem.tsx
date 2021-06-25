import React from 'react';
import PropTypes from 'prop-types';
import './DisplaySubItem.scss';

type DisplaySubItemProps = {
  children: React.ReactNode;
};

const DisplaySubItem = ({ children }: DisplaySubItemProps) => {
  return <div className='displaySubItemRoot'>{children}</div>;
};

DisplaySubItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DisplaySubItem;
