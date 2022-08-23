import { FunctionComponent } from 'react';
import { ButtonBaseProps } from '@atoms/Button/Button.types';
import clsx from 'clsx';

export const ButtonRaised: FunctionComponent<ButtonBaseProps> = ({
  children,
  onClick,
  classNames,
  ...props
}) => {
  return (
    <button
      {...props}
      type="button"
      className={clsx('py-3 px-7 bg-cs-pink text-white', classNames)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
