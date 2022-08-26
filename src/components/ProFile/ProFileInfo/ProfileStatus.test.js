import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProfileStatus from "./ProfileStatus";
import "@testing-library/jest-dom/extend-expect";

describe("ProfileStatus", () => {
  test("renders ProfileStatus component", () => {
    render(<ProfileStatus status="initial status" />);
  });

  test("input is invisible at first", () => {
    render(<ProfileStatus status="status" />);
    const paragraph = screen.getByText("status");
    expect(paragraph).toBeInTheDocument();
    const input = screen.queryByTestId("input-elem");
    expect(input).toBe(null);
  });

  test("input is visible after doubleCLick on paragraph", () => {
    render(<ProfileStatus status="status" />);
    const paragraph = screen.getByText("status");
    fireEvent.doubleClick(paragraph);
    const paragraphAfterDoubleClick = screen.queryByText("status");
    expect(paragraphAfterDoubleClick).toBe(null);
    const input = screen.getByTestId("input-elem");
    expect(input).toBeInTheDocument();
  });

  test("after input text status should be updated", () => {
    const updateStatus = (status) => {};

    render(<ProfileStatus status="status" updateStatus={updateStatus} />);
    const paragraph = screen.getByText("status");
    fireEvent.doubleClick(paragraph);
    const input = screen.getByTestId("input-elem");
    fireEvent.input(input, { target: { value: "newStatus" } });
    fireEvent.blur(input);
    const newParagraph = screen.getByText("newStatus");
    expect(newParagraph).toBeInTheDocument();
    const newInput = screen.queryByTestId("input-elem");
    expect(newInput).toBe(null);
  });
});
