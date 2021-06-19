import React from 'react';

type BoxProps = {
  children: React.ReactNode;
};

const Box = ({ children }: BoxProps) => {
  return <section>{children}</section>;
};

export default function App() {
  return (
    <Box>
      <h1>this is example</h1>
      <Box>
        <h2>this is another example</h2>
      </Box>
    </Box>
  );
}
