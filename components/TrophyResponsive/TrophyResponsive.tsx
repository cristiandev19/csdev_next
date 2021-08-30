import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Trophy from '../ui/atoms/Trophy/Trophy'
import useWindowSize, { WidthSizesProps } from '../../hooks/useWindowSize';

const rowColPerSize: WidthSizesProps<{ row: number; col: number }> = {
  extrasmall: { row: 3, col: 2 },
  small: { row: 3, col: 3 },
  medium: { row: 3, col: 4 },
  large: { row: 2, col: 6 },
  extralarge: { row: 2, col: 6 },
};


const TrophyResponsive = props => {

  const [size, widthStates] = useWindowSize();
  const [rowAndCol, setRowAndCol] = useState({row: 2, col: 4});

  useEffect(() => {
    setRowAndCol(rowColPerSize[widthStates])
  }, [size, widthStates])

  return (
    <>
      <Trophy row={rowAndCol.row} col={rowAndCol.col}/>
    </>
  )
}

TrophyResponsive.propTypes = {

}

export default TrophyResponsive
