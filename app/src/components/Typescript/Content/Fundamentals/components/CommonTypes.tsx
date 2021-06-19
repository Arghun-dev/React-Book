import { Typography } from 'antd';
import CodeSyntax from '../../../../CodeSyntax/CodeSyntax';

const { Title, Paragraph } = Typography;

const CommonTypes = () => {
  return (
    <div>
      <Title>Common Types</Title>
      <CodeSyntax>
        {`type CounterProps = {
  incident: string;
  count: number;
  enabled: oolean;
}`}
      </CodeSyntax>
      <Paragraph>
        All the primitive in javascript are available to us in typescript as well
      </Paragraph>
      <CodeSyntax>
        {`type GriceryListProps = {
  items: string[];
  status: 'loading' | 'error' | 'success';
}`}
      </CodeSyntax>
      <Paragraph>For objects:</Paragraph>
      <CodeSyntax>
        {`type ComponentProps = {
  anObject: object; // Useful as a placeholder
  anotherObject: {}; // Can have any properties and values
  item: {
    id: string;
    title: string;
  };
  items: {
    id: string;
    title: string;
  }[]; // an array of objects of a certain shape
}`}
      </CodeSyntax>
      <CodeSyntax>
        {`type ItemHash = {
  [key: string]: Item;
};

type Dictionary = {
  [key: number]: string;
};`}
      </CodeSyntax>
      <CodeSyntax>
        {`type FunctionProps = {
  // Does not take any argument does not return anything
  onHover: () => void;

  // Takes a number. Returns nothing
  onChange: (id: number) => void;

  // Takes an event that is based on clicking on a button.
  // Returns nothing
  onClick: (event: React.MouseEvent<HTMLButtonElement>): void;
};`}
      </CodeSyntax>
      <CodeSyntax>
        {`const add = (a:number, b:number): number => {
  return a + b;
}`}
      </CodeSyntax>
      <Paragraph>Optional Props</Paragraph>
      <CodeSyntax>
        {`type OptionalProps = {
  requiredProp: boolean;
  optionalProp?: string; // this says hey that could be undefined
}`}
      </CodeSyntax>
    </div>
  );
};

export default CommonTypes;
