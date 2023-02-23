declare type PanelState = {
  size?: number;
  minSize?: number;
  resize?: "fixed" | "dynamic" | "stretch";
  windows: WindowState[];
};

declare type WindowState = {
  selected: number | 0;
  widgets: string[];
};

declare type DockableProps = {
  initialState: PanelState[];
  hidden?: {
    [key: string]: boolean;
  };
  onUpdate: (arg: PanelState[]) => void;
  onActive?: (id: string) => void;
  themeClass?: string;
  theme?: any;
  spacing?: number;
  hideMenus?: boolean;
  hideTabs?: boolean;
  active?: string;
  tabHeight?: number;
  children?: JSX.Element | JSX.Element[];
};
