import { createContext, useState, ReactNode } from 'react';

type MenuProviderProps = {
  children: ReactNode;
};

export const MenuContext = createContext({});

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [selectedMenu, setSelectedMenu] = useState('');

  return (
    <MenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
