import React from "react";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Pomodoro from ".."


beforeEach(cleanup);

describe('Pomodoro', () => {

  beforeEach(() => {
    render(<Pomodoro />);
    jest.useFakeTimers();
  })
  afterEach(() => {
    jest.useRealTimers();
  });

  afterAll(() => {
    jest.clearAllTimers();
  })

  it('should open and close modal', async () => {
    expect(screen.queryByText("Settings")).toBeNull();
    userEvent.click(screen.getByLabelText("open-settings"));
    const settings = await waitFor(() => screen.getByText("Settings"));
    expect(settings).toBeInTheDocument();
    userEvent.click(screen.getByLabelText("close-settings"));
    expect(screen.queryByText("Settings")).toBeNull();
  });


  it('should start timer', () => {
    expect(screen.getByTestId("format-time")).toHaveTextContent("01:00");
    userEvent.click(screen.getByText("START"));
    act(() => {
      jest.advanceTimersByTime(1000);
    })
    expect(screen.getByTestId("format-time")).toHaveTextContent("00:59");
  });

  it('should stop timer', () => {
    userEvent.click(screen.getByText("PAUSE"));
    act(() => {
      jest.advanceTimersByTime(1000 * 5);
    })
    expect(screen.getByTestId("format-time")).toHaveTextContent("00:59");
    expect(screen.getByText("START")).toHaveTextContent("START");
  });

});
