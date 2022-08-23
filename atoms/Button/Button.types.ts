export type ButtonBaseProps = {
  children: React.ReactNode;
  onClick: () => void;
  classNames?: string;
};

export interface ButtonProps extends ButtonBaseProps {
  mode?: ButtonModes;
}

export type ButtonModes = 'raised' | 'icon';
