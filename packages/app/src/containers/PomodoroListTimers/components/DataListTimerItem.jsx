import React from 'react'
import { css, styled } from '@pomodoro/design'
import Color from '../../../components/Color'


const Wrapper = styled("div", {
  variants: {
    variant: {
      main: {
        padding: "15px 8px",
      },
    },
    flex: {
      row: {
        display: "flex",
      },
      col: {
        display: "flex",
        flexDirection: "column"
      }
    }
  }
})

const Text = styled("p", {
  display: "block",
  color: "white",
  variants: {
    variant: {
      title: {
        fontWeight: "bold",
        fontSize: ".9rem"
      },
      content: {
        fontSize: ".8rem",
        lineHeight: "24px",
        opacity: .7
      }
    }
  }
})
const titleClassname = css({ marginBottom: "5px" });
const detailClassname = css({ marginLeft: "8px" });


const DataListTimerItem = ({ data }) => {
  const { title, description, color } = data;

  return (
    <Wrapper variant="main" flex="row">
      <Wrapper>
        <Color color={color}>{title[0]}</Color>
      </Wrapper>
      <Wrapper flex="col" className={detailClassname}>
        <Text as="h3" variant="title" className={titleClassname}>
          {title}
        </Text>
        <Text as="span" variant="content">{description}</Text>
      </Wrapper>
    </Wrapper >
  )
}

DataListTimerItem.defaultProps = {
  data: {
    title: "",
    description: "",
    color: ""
  }
}

export default DataListTimerItem
