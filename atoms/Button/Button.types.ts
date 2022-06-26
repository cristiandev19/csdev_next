export type ButtonBaseProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export interface ButtonProps extends ButtonBaseProps {
  mode?: ButtonModes;
}

export type ButtonModes = 'raised' | 'icon';
