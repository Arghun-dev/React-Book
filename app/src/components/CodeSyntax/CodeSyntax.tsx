import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import './prism.css';

type CodeSyntaxProps = {
  children: React.ReactNode;
};

const CodeSyntax = ({ children }: CodeSyntaxProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <pre>
        <code className='language-javascript'>{children}</code>
      </pre>
    </div>
  );
};

CodeSyntax.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CodeSyntax;
