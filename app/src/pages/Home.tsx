import { useContext } from 'react';
import { MenuContext } from '@context/MenuContext';
import ImagesInHTMLPage from './ImagesInHTML';
import Typescript from './Typescript';
import TypescriptAndReact from '../components/Typescript/TypscriptAndReact';

const Home = () => {
  const { selectedMenu } = useContext(MenuContext);
  return (
    <>
      {selectedMenu === 'Images in HTML' && <ImagesInHTMLPage />}
      {selectedMenu === 'typescript' && <Typescript />}
      {selectedMenu === 'Typescript and React' && <TypescriptAndReact />}
    </>
  );
};

export default Home;
