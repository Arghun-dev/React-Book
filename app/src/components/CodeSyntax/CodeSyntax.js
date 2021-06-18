import PropTypes from 'prop-types';
import { CodeBlock, dracula } from 'react-code-blocks';

const CodeSyntax = ({ codeString }) => {
  if (!codeString) return null;

  return (
    <CodeBlock
      text={codeString}
      language='javascript'
      showLineNumbers
      startingLineNumber
      theme={dracula}
      wrapLines
      codeBlock
    />
  );
};

CodeSyntax.propTypes = {
  codeString: PropTypes.string.isRequired,
};

export default CodeSyntax;
