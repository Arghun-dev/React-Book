import './AlternativeText.scss';
import { Typography } from 'antd';
import Highlight from '../../../../Highlight';
// import CodeSyntax from '../../../../CodeSyntax';
import List from '../../../../List';
import Note from '../../../../Note';

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
      {/* <CodeSyntax
        codeString='<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth">'
      /> */}

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
            {
              title: 'Link',
              text: 'If you put an image inside <a> tags, to turn an image into a link, you still must provide accessible link text. In such cases you may, either, write it inside the same <a> element, or inside the images alt attribute – whichever works best in your case.',
            },
            {
              title: 'text',
              text: 'You should not put your text into images. If your main heading needs a drop shadow, for example, use CSS for that rather than putting the text into an image. However, If you really cant avoid doing this, you should supply the text inside the alt attribute.',
            },
          ]}
        />

        <Paragraph>
          Essentially, the key is to deliver a usable experience, even when the
          images can&#39;t be seen. This ensures all users are not missing any of the
          content. Try turning off images in your browser and see how things look.
          You&#39;ll soon realize how helpful alt text is if the image cannot be
          seen.
        </Paragraph>

        <Title>Width and height</Title>
        <Paragraph>You can use width and height attributes in img tags.</Paragraph>
        <Paragraph>
          This is a good thing to do, resulting in the page loading quicker and more
          smoothly. However, you shouldn&#39;t alter the size of your images using
          HTML attributes. If you set the image size too big, you&#39;ll end up with
          images that look grainy, fuzzy, or too small, and wasting bandwidth
          downloading an image that is not fitting the user&#39;s needs. The image
          may also end up looking distorted, if you don&#39;t maintain the correct
          aspect ratio. You should use an image editor to put your image at the
          correct size before putting it on your webpage.
        </Paragraph>
        <Note>
          If you do need to alter an image&#39;s size, you should use{' '}
          <Highlight>CSS</Highlight> instead.
        </Note>

        <Title>Image Titles</Title>
        <Paragraph>
          As with links, you can also add <Highlight>title</Highlight> attributes to
          images, to provide further supporting information if needed. In our
          example, we could do this:
        </Paragraph>
        {/* <CodeSyntax
          codeString='<img src="images/dinosaur.jpg"
            alt="The head and torso of a dinosaur skeleton;
                  it has a large head with long sharp teeth"
            width="400"
            height="341"
            title="A T-Rex on display in the Manchester University Museum">'
        /> */}
        <Note>This gives us a tooltip on mouse hover, just like link titles:</Note>
        <Paragraph>
          However, this is not recommended — title has a number of accessibility
          problems, mainly based around the fact that screen reader support is very
          unpredictable and most browsers won&#39;t show it unless you are hovering
          with a mouse (so e.g. no access to keyboard users). If you are interested
          in more information about this, read The Trials and Tribulations of the
          Title Attribute by Scott O&#39;Hara.
          <br />
          <br /> It is better to include such supporting information in the main
          article text, rather than attached to the image.
        </Paragraph>
        <Note>never hotlink to images on other servers</Note>

        <Title>Annotating images with figures and figure captions</Title>
        <Paragraph>
          Speaking of captions, there are a number of ways that you could add a
          caption to go with your image. For example, there would be nothing to stop
          you from doing this:
        </Paragraph>
        {/* <CodeSyntax 
          codeString='<div class="figure">
          <img src="images/dinosaur.jpg"
               alt="The head and torso of a dinosaur skeleton;
                    it has a large head with long sharp teeth"
               width="400"
               height="341">
        
          <p>A T-Rex on display in the Manchester University Museum.</p>
        </div>'
        /> */}
        <Paragraph>
          This is ok. It contains the content you need, and is nicely stylable using
          CSS. But there is a problem here: there is nothing that semantically links
          the image to its caption, which can cause problems for screen readers. For
          example, when you have 50 images and captions, which caption goes with
          which image?
        </Paragraph>
        <Paragraph>
          A better solution, is to use the HTML5 <Highlight>figure</Highlight> and
          <Highlight>figcaption</Highlight> elements. These are created for exactly
          this purpose: to provide a semantic container for figures, and to clearly
          link the figure to the caption. Our above example could be rewritten like
          this:
        </Paragraph>
        {/* <CodeSyntax 
          codeString='<figure>
          <img src="images/dinosaur.jpg"
               alt="The head and torso of a dinosaur skeleton;
                    it has a large head with long sharp teeth"
               width="400"
               height="341">
        
          <figcaption>A T-Rex on display in the Manchester University Museum.</figcaption>
        </figure>'
        /> */}
        <Paragraph>
          The <Highlight>figcaption</Highlight> element tells browsers, and assistive
          technology that the caption describes the other content of the{' '}
          <Highlight>figure</Highlight> element.
        </Paragraph>

        <Title>CSS background images</Title>
        <Paragraph>
          The resulting embedded image, is arguably easier to position and control
          than HTML images. So why bother with HTML images? As hinted to above, CSS
          background images are for decoration only. If you just want to add
          something pretty to your page to enhance the visuals, this is fine. Though,
          such images have no semantic meaning at all. They can&#39;t have any text
          equivalents, are invisible to screen readers, and so on. This is where HTML
          images shine!
          <br />
          <br />
          <Highlight>
            Summing up: if an image has meaning, in terms of your content, you should
            use an HTML image. If an image is purely decoration, you should use CSS
            background images.
          </Highlight>
        </Paragraph>
      </div>
    </div>
  );
};

export default AlternativeText;
