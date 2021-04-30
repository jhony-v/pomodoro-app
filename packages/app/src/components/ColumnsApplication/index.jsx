import React, { useMemo } from 'react'
import { css } from "@pomodoro/design"
import { useMediaQuery } from "react-responsive"

const ColumnsApplication = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 780 });
  const [timer, listTimers] = React.Children.toArray(children)

  const style = useMemo(() => css({
    display: isTablet ? "flex" : "block",
    flex: 1,
    alignItems: "stretch",
  }), [isTablet])


  const styleTimer = useMemo(() => css({
    flex: 1,
    display: "flex",
    margin: isTablet ? "auto" : "20px 0px",
  }), [isTablet])

  const styleListTimers = useMemo(() => css({
    width: isTablet ? "340px" : "auto",
  }), [isTablet])

  return (
    <div className={style}>
      {timer.type() && <div className={styleTimer}>{timer}</div>}
      {listTimers.type() && <div className={styleListTimers}>{listTimers}</div>}
    </div>
  )
}

export default ColumnsApplication