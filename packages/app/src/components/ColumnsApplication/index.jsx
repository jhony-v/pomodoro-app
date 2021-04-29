import React, { useMemo } from 'react'
import { css } from "@pomodoro/app-service"
import { useMediaQuery } from "react-responsive"

const ColumnsApplication = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 780 });
  const [timer, listTimers] = React.Children.toArray(children)

  const style = useMemo(() => css({
    display: isTablet ? "flex" : "block",
    height: "100%"
  }), [isTablet])


  const styleTimer = useMemo(() => css({
    width: "100%",
    height: "100%",
    display: "flex",
  }), [])

  const styleListTimers = useMemo(() => css({
    width: isTablet ? "430px" : "auto"
  }), [isTablet])

  return (
    <div className={style}>
      {timer.type() && <div className={styleTimer}>{timer}</div>}
      {listTimers.type() && <div className={styleListTimers}>{listTimers}</div>}
    </div>
  )
}

export default ColumnsApplication