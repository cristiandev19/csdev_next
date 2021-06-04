import React from 'react'
import PropTypes from 'prop-types'
import styles from './LinkButton.module.css'

{/* <a target="_blank|_self|_parent|_top|framename"> */}

const LinkButton = ({ href, children }) => {
  return (
    <>
      <a className={styles['primary-link']} href={href} target="_blank" rel="noreferrer">
        { children }
      </a>
    </>
  )
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
}

export default LinkButton;
