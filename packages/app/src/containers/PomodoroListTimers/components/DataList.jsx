import { styled } from '@pomodoro/design';


export const Wrapper = styled("section", {
  width: "350px",
  height: "100%",
  marginLeft: "200px",
  display: "flex",
  flex: "none",
  flexDirection: "column",
})

export const Body = styled("div", {
  flex: 1,
  overflowY: "auto"
})

export const Footer = styled("div", {
  height: "90px",
  display: "flex",
})


export const CreateTimer = styled("button", {
  background: "white",
  margin: "auto",
  width: "90%",
  fontWeight: "bold",
  padding: "20px",
  borderRadius: "10px"
})
