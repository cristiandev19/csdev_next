import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Trophy from '../ui/atoms/Trophy/Trophy'
import useWindowSize from '../../hooks/useWindowSize';

const TrophyResponsive = props => {
  const widthSizeCol = {
    small: 200,
    medium: 600,
    large: 1000,
  }
  const size = useWindowSize();
  const [row, setRow] = useState(2);
  const [col, setCol] = useState(4);

  useEffect(() => {
    console.log('cada que cambia', size)
    if (size.width >= widthSizeCol.large) {
      setCol(6);
    } else if (size.width >= widthSizeCol.medium) {
      setCol(4);
      setRow(3);
    } else if (size.width >= widthSizeCol.small) {
      setCol(2);
      setRow(4);
    }
  }, [size])

  return (
    <>
      <Trophy row={row} col={col}/>
    </>
  )
}

TrophyResponsive.propTypes = {

}

export default TrophyResponsive
