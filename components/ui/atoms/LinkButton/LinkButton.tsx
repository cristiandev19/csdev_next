import React from 'react';
import styles from './LinkButton.module.css';

{/* <a target="_blank|_self|_parent|_top|framename"> */}

type LinkButtonProps = {
  href: string;
  children: any;
}

type LinkTypes = 'primary-link' | 'secondary-link' | 'tertiary-link';

const LinkButton = ({ href, children }: LinkButtonProps) => {

  return (
    <>
      <a className={styles['primary-link']} href={href} target="_blank" rel="noreferrer">
        { children }
      </a>
    </>
  )
}

export default LinkButton;
