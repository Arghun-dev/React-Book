import { Card, Row } from 'antd';
import Note from '../../../Note/Note';
import Highlight from '../../../Highlight/Highlight';
import AlternativeText from './AlternativeText/AlternativeText';

const ImagesInHTML = () => {
  return (
    <Card title='Images in HTML' style={{ marginBottom: 40 }}>
      <Row>
        <Note>
          Search engines also read image filenames and count them towards SEO.
          Therefore, you should give your image a descriptive filename;{' '}
          <Highlight>dinosaur.jpg</Highlight>
          is better than <Highlight>img835.png</Highlight>
        </Note>

        <Note>
          Elements like <Highlight>img</Highlight> and <Highlight>video</Highlight>{' '}
          are sometimes referred to as replaced elements. This is because the
          element&apos;s content and size are defined by an external resource (like
          an image or video file), not by the contents of the element itself. You can
          read more about them at Replaced elements.
        </Note>

        <AlternativeText />
      </Row>
    </Card>
  );
};

export default ImagesInHTML;
