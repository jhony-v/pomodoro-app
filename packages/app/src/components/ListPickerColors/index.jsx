import { styled } from '@pomodoro/design';
import React, { useMemo } from 'react'
import colors from '../../colors';
import Color from '../Color';


const Wrapper = styled("div", {
  variants: {
    layout: {
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "10px",
        background: "rgba(0,0,0,.1)",
        padding: "6px",
        borderRadius: "15px",
      },
      flex: {
        display: "flex",
        justifyContent: "center",
        transition: "transform .3s",
        "&:hover": {
          transform: "scale(1.4)"
        }
      }
    }
  }
})


const ListPickerColors = ({ onColor }) => {

  const listColors = useMemo(() => colors, []);
  return (
    <Wrapper layout="grid">
      {listColors.map((item, index) => (
        <Wrapper key={index} layout="flex">
          <Color color={item} onClick={() => onColor(item)} />
        </Wrapper>
      ))}
    </Wrapper>
  )
}

export default ListPickerColors
