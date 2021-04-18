import React from "react"
import { css, styled } from '@pomodoro/design'

const StyledColor = styled("div", {
  width: "32px",
  height: "32px",
  display: "flex",
  flex: "none",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  color: "white"
})


export default function Color({ color, children, onClick }) {
  return <StyledColor className={css({ background: color })} onClick={onClick} aria-label="timer color" >
    {children}
  </StyledColor>
}