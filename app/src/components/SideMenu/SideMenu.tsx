import { useContext } from 'react';
import { Menu } from 'antd';
import { sideMenuContextType } from 'types/sideMenuTypes';
import menuData from 'data/side-menu';
import { MenuContext } from 'context/MenuContext';

const { SubMenu } = Menu;

const SideMenu = () => {
  const { setSelectedMenu } = useContext(MenuContext) as sideMenuContextType;

  const withoutSubMenu = menuData.sideMenuData.filter(
    (item) => item.subMenu.length === 0
  );

  const withSubMenu = menuData.sideMenuData.filter(
    (item) => item.subMenu.length > 0
  );

  return (
    <Menu
      mode='inline'
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      {withoutSubMenu.map((item) => (
        <Menu.Item key={item.id} onClick={() => setSelectedMenu(item.id)}>
          {item.title}
        </Menu.Item>
      ))}
      {withSubMenu.map((item) => (
        <SubMenu key={item.id} title={item.title}>
          {item.subMenu.map((subItem) => (
            <Menu.Item key={subItem.id} onClick={() => setSelectedMenu(subItem.id)}>
              {subItem.title}
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default SideMenu;
