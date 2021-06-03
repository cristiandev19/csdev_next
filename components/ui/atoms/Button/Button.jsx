import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  text,
}) => {
  return (
    <>
      <button className="primary-btn">{ text }</button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;
