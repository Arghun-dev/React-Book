import { useContext } from 'react';
import { MenuContext } from 'context/MenuContext';
import { sideMenuContextType } from 'types/sideMenuTypes';
import TypescriptAndReact from 'components/Typescript/TypscriptAndReact';
import SWRIntroduction from 'components/SWR/Introduction';
import SWRGetStarted from 'components/SWR/GetStarted';
import ImagesInHTMLPage from './ImagesInHTML';

const Home = () => {
  const { selectedMenu } = useContext(MenuContext) as sideMenuContextType;
  return (
    <>
      {selectedMenu === 'Images in HTML' && <ImagesInHTMLPage />}
      {selectedMenu === 'Typescript and React' && <TypescriptAndReact />}
      {selectedMenu === 'Introduction-swr' && <SWRIntroduction />}
      {selectedMenu === 'Get Started-swr' && <SWRGetStarted />}
    </>
  );
};

export default Home;
