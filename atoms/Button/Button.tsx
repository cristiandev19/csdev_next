import React, { FunctionComponent } from 'react';
import { ButtonProps } from './Button.types';
import { ButtonIcon } from './ButtonIcon';
import { ButtonRaised } from './ButtonRaised';

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  mode = 'raised',
  classNames = '',
  ...props
}) => (
  <>
    {
      {
        icon: (
          <ButtonIcon {...props} classNames={classNames} onClick={onClick}>
            {children}
          </ButtonIcon>
        ),
        raised: (
          <ButtonRaised {...props} classNames={classNames} onClick={onClick}>
            {children}
          </ButtonRaised>
        ),
      }[mode]
    }
  </>
);

export default Button;
