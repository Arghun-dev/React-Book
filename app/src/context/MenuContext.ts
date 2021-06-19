import { createContext, useState, ReactNode } from 'react';
import PropTypes from 'prop-types';

export const MenuContext = createContext();

const { Provider } = MenuContext;

type MenuProviderProps = {
  children: ReactNode;
};

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [selectedMenu, setSelectedMenu] = useState('');

  return <Provider value={{ selectedMenu, setSelectedMenu }}>{children}</Provider>;
};

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuProvider;
