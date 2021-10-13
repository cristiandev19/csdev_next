import React, { FunctionComponent } from 'react';

type ButtonBaseProps = {
  children: React.ReactNode;
  onClick: () => void;
};
interface ButtonProps extends ButtonBaseProps {
  mode?: ButtonModes;
}

type ButtonModes = 'raised' | 'icon';

const ButtonIcon: FunctionComponent<ButtonBaseProps> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
};

const ButtonRaised: FunctionComponent<ButtonBaseProps> = ({
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
