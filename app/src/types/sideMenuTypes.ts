export type sideMenuContextType = {
  selectedMenu: string;
  setSelectedMenu: (item: string) => void;
};

export interface subListType {
  item: {
    id: number;
    title: string;
    list: {
      id: number;
      title: string;
      content: string;
    }[];
  };
}
