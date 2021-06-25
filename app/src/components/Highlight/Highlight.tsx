import React from 'react';
import PropTypes from 'prop-types';
import './Highlight.scss';

type HighlightProps = {
  children: React.ReactChild;
};

const Highlight = ({ children }: HighlightProps) => {
  return <span className='highlightRoot'>{children}</span>;
};

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Highlight;
