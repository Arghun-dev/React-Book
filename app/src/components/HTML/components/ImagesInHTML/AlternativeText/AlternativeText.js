import './AlternativeText.scss';
import { Typography } from 'antd';
import Highlight from '../../../../Highlight';
import CodeSyntax from '../../../../CodeSyntax';
import List from '../../../../List';

const { Title, Paragraph, Text } = Typography;

const AlternativeText = () => {
  return (
    <div className='alternativeTextRoot'>
      <Title>Alternative Text</Title>
      <Paragraph>
        The next attribute we&#39;ll look at is <Highlight>alt</Highlight>. Its value
        is supposed to be a textual description of the image, for use in situations
        where the image cannot be seen/displayed or takes a long time to render
        because of a slow internet connection. For example, our above code could be
        modified like so:
      </Paragraph>
      <CodeSyntax
        codeString='<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth">'
      />

      <div style={{ marginTop: 32 }}>
        <Text>
          What exactly should you write inside your alt attribute? It depends on why
          the image is there in the first place. In other words, what you lose if
          your image doesn&#39;t show up:
        </Text>

        <List
          list={[
            {
              title: 'Decoration',
              text: 'You should use CSS background images for decorative images, but if you must use HTML, add a blank alt="". If the image isnt part of the content, a screen reader shouldnt waste time reading it.',
            },
            {
              title: 'Content',
              text: 'If your image provides significant information, provide the same information in a brief alt text – or even better, in the main text which everybody can see. Dont write redundant alt text. How annoying would it be for a sighted user if all paragraphs were written twice in the main content? If the image is described adequately by the main text body, you can just use alt="".',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AlternativeText;
