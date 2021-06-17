import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSyntax = ({ codeString }) => {
  if (!codeString) return null;

  return (
    <SyntaxHighlighter language='javascript' style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

CodeSyntax.propTypes = {
  codeString: PropTypes.string.isRequired,
};

export default CodeSyntax;
