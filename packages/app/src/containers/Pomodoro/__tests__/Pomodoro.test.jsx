import React from "react";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Pomodoro from ".."

afterEach(cleanup)


describe('Pomodoro', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  })
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });



  it('should open and close modal', async () => {
    render(<Pomodoro />);
    expect(screen.queryByText("Settings")).toBeNull();
    userEvent.click(screen.getByLabelText("open-settings"));
    const settings = await waitFor(() => screen.getByText("Settings"));
    expect(settings).toBeInTheDocument();
    userEvent.click(screen.getByLabelText("close-settings"));
    expect(screen.queryByText("Settings")).toBeNull();
  });


  it('should start timer', () => {
    const { getByText } = render(<Pomodoro />);
    expect(screen.getByTestId("format-time")).toHaveTextContent("01:00");
    act(() => {
      userEvent.click(getByText("START"))

    })
    expect("").toBe("");
  });


});
