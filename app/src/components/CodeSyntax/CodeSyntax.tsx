import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import './prism.css';

const CodeSyntax = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
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
