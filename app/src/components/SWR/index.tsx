import { useContext } from 'react';
import { MenuContext } from 'context/MenuContext';
import { sideMenuContextType } from 'types/sideMenuTypes';
import Introduction from './Introduction';
import GetStarted from './GetStarted';

const Swr = () => {
  const { selectedMenu } = useContext(MenuContext) as sideMenuContextType;
  return (
    <>
      {selectedMenu === 'Introduction-swr' && <Introduction />}
      {selectedMenu === 'Get Started-swr' && <GetStarted />}
    </>
  );
};

export default Swr;
