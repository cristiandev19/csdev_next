import React, { FunctionComponent } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
}) => (
  <>
    <button type="button" className={styles['primary-btn']}>{ children }</button>
  </>
);

export default Button;
