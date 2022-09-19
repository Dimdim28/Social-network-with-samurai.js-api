import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProfileStatus from "./ProfileStatus";
import "@testing-library/jest-dom/extend-expect";

describe("ProfileStatus", () => {
  test("renders ProfileStatus component", () => {
    render(<ProfileStatus status="initial status" />);
  });

  test("input is invisible at first", () => {
    render(<ProfileStatus isOwner={true} status="status" />);
    const paragraph = screen.getByTestId("status-elem-desctop");
    expect(paragraph).toBeInTheDocument();
    const input = screen.queryByTestId("input-elem-desctop");
    expect(input).toBe(null);
  });

  //   test("input is visible after doubleCLick on paragraph", () => {
  //     const updateStatus = (status) => {};

  //     render(
  //       <ProfileStatus
  //         updateStatus={updateStatus}
  //         status="status"
  //         isOwner={true}
  //       />
  //     );
  //     fireEvent.doubleClick(screen.getByTestId("status-elem-desctop"));
  //     expect(screen.queryByTestId("status-elem-desctop")).toBe(null);
  //     const input = screen.getByTestId("input-elem-desctop");
  //     expect(input).toBeInTheDocument();
  //   });

  //   test("after input text status should be updated", () => {
  //     const updateStatus = (status) => {};

  //     render(
  //       <ProfileStatus
  //         status="status"
  //         isOwner={true}
  //         updateStatus={updateStatus}
  //       />
  //     );
  //     const paragraph = screen.getByTestId("status-elem-desctop");
  //     fireEvent.doubleClick(paragraph);
  //     const input = screen.getByTestId("input-elem-desctop");
  //     fireEvent.input(input, { target: { value: "newStatus" } });
  //     fireEvent.blur(input);
  //     const newParagraph = screen.getByText("newStatus");
  //     expect(newParagraph).toBeInTheDocument();
  //     const newInput = screen.queryByTestId("input-elem-desctop");
  //     expect(newInput).toBe(null);
  //   });
});
