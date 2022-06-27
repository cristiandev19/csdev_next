import React, { FunctionComponent } from 'react';
import { ButtonProps } from './Button.types';
import { ButtonIcon } from './ButtonIcon';
import { ButtonRaised } from './ButtonRaised';

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  mode = 'raised',
}) => (
  <>
    {
      {
        icon: <ButtonIcon onClick={onClick}>{children}</ButtonIcon>,
        raised: <ButtonRaised onClick={onClick}>{children}</ButtonRaised>,
      }[mode]
    }
  </>
);

export default Button;
