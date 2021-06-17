import { Card, Row } from 'antd';
import PropTypes from 'prop-types';
import Note from '../../../Note';
import Highlight from '../../../Highlight';
import AlternativeText from './AlternativeText/AlternativeText';

const ImagesInHTML = ({ content }) => {
  return (
    <Card title={content}>
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

ImagesInHTML.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ImagesInHTML;
