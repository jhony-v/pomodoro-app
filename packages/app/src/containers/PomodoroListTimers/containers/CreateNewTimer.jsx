import { useMutationCreateTimer } from '@pomodoro/app-service'
import { styled } from '@pomodoro/design'
import { useEvent, useStore } from 'effector-react'
import React from 'react'
import BaseButton from '../../../components/BaseButton'
import pomodoroList from '../models/pomodoroList'


const Wrapper = styled("div", {
  variants: {
    variant: {
      main: {
        padding: "20px 10px",
        borderRadius: "6px"
      },
      durations: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px"
      }
    }
  }
})

const Input = styled("input", {
  background: "white",
  padding: 'sp10 sp10',
  borderRadius: "10px",
  resize: "none",
  display: "block",
  width: "100%",
  marginBottom: "15px"
})
const Text = styled("span", {
  color: "white",
  fontSize: ".8rem",
  display: "block",
  opacity: .8,
  marginBottom: "5px"
});


const CreateNewTimer = () => {
  const completedFields = useStore(pomodoroList.$completedFields);
  const creatingTimer = useStore(pomodoroList.$creatingTimer);
  const newTimerData = useStore(pomodoroList.$newTimerData);
  const updateNewTimerData = useEvent(pomodoroList.updateNewTimerData);
  const { onAddTimer } = useMutationCreateTimer();

  const handlerOnAddTimer = (e) => {
    e.preventDefault();
    onAddTimer(newTimerData).then(() => {
      pomodoroList.resetCreatedNewTimerData()
    });
  }
  if (creatingTimer) {
    return (
      <Wrapper variant="main" as="form" onSubmit={handlerOnAddTimer}>
        <Wrapper>
          <Text>Type a title</Text>
          <Input placeholder="Type a title" name="title" onKeyUp={updateNewTimerData} />
        </Wrapper>
        <Wrapper>
          <Text>Type a description</Text>
          <Input placeholder="Type a description" as="textarea" rows="3" name="description" onKeyUp={updateNewTimerData} />
        </Wrapper>
        <Wrapper variant="durations">
          <Wrapper>
            <Text>Normal</Text>
            <Input placeholder="normal" type="number" name="durations.normal" onKeyUp={updateNewTimerData} />
          </Wrapper>
          <Wrapper>
            <Text>Short</Text>
            <Input placeholder="short" type="number" name="durations.short" onKeyUp={updateNewTimerData} />
          </Wrapper>
          <Wrapper>
            <Text>Long</Text>
            <Input placeholder="long" type="number" name="durations.long" onKeyUp={updateNewTimerData} />
          </Wrapper>
        </Wrapper>
        <BaseButton disabled={!completedFields} >Create new timer to pomodoro</BaseButton>
      </Wrapper>
    )
  }
  return null;
}

export default CreateNewTimer
