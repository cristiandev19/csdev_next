import React, { FunctionComponent } from 'react';
import { ButtonBaseProps } from '@atoms/Button/Button.types';

export const ButtonIcon: FunctionComponent<ButtonBaseProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="p-1 bg-cs-pink text-white rounded-full"
    >
      {children}
    </button>
  );
};
