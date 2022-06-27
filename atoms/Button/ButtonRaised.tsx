import { FunctionComponent } from 'react';
import { ButtonBaseProps } from '@atoms/Button/Button.types';

export const ButtonRaised: FunctionComponent<ButtonBaseProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="py-3 px-7 bg-cs-pink text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
