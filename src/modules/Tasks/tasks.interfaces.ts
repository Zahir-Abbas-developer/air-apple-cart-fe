export interface TaskInterfaceProps {
  onChange: ({}) => void;
  disableActionBtn?: boolean;
}

export interface TaskDrawerInterfaceProps {
  title?: string;
  children?: React.ReactNode;
  btnTitle?: string;
  btnIcon?: React.ReactNode;
  submitHandler?: () => void;
  isOk?: boolean;
  okText?: string;
  btnVariant?: 'outlined' | 'contained';
  hideFooter?: boolean;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
