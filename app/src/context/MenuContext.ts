import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MenuContext = createContext();

const { Provider } = MenuContext;

const MenuProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState('');

  return <Provider value={{ selectedMenu, setSelectedMenu }}>{children}</Provider>;
};

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuProvider;
