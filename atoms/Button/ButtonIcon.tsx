import React, { FunctionComponent } from 'react';
import { ButtonBaseProps } from '@atoms/Button/Button.types';
import clsx from 'clsx';

export const ButtonIcon: FunctionComponent<ButtonBaseProps> = ({
  children,
  onClick,
  classNames,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      type="button"
      className={clsx('p-1 bg-cs-pink text-white rounded-full', classNames)}
    >
      {children}
    </button>
  );
};
