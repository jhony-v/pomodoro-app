import { styled } from '@pomodoro/design'
import React from 'react'


const Wrapper = styled("div", {
  padding: "15px 8px",
  variants: {
    variant: {
      selected: {
        background: "rgba(200,200,200,.2)",
        borderLeft: "2px solid $primary"
      },
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
        fontSize: "1rem"
      },
      content: {
        fontSize: ".9rem",
        lineHeight: "24px",
        opacity: .7
      }
    }
  }
})

const DataListITimerItem = ({ data: { title, description }, selected }) => {
  return (
    <Wrapper variant={selected ? "selected" : ""}>
      <Text as="h3" variant="title" css={{
        marginBottom: "5px"
      }}>
        {title}
      </Text>
      <Text as="span" variant="content">{description}</Text>
    </Wrapper >
  )
}

export default DataListITimerItem
