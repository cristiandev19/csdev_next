import React from 'react'
import PropTypes from 'prop-types'
import useWindowSize from '../../../../hooks/useWindowSize';

const Trophy = ({
  row, col,
}) => {

  return (
    <>
      <a href="https://github.com/ryo-ma/github-profile-trophy">
        <img className="fullwidth" src={`https://github-profile-trophy.vercel.app/?username=cristiandev19&row=${row}&column=${col}`} alt="cristiandev19" />
      </a>
    </>
  )
}

Trophy.propTypes = {

}

export default Trophy
