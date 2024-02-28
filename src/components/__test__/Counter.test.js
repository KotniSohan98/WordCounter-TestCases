import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counter } from "../Counter";
import userEvent from "@testing-library/user-event";

describe("Counter Component Test", () => {
  test("render the textarea", () => {
    const { getByTestId } = render(<Counter />);
    const textArea = getByTestId("textArea");
    expect(textArea).toBeTruthy();
  });

  test("render the textarea", () => {
    const { getByPlaceholderText } = render(<Counter />);
    const textArea = getByPlaceholderText("Type or paste your text");
    expect(textArea).toBeTruthy();
  });

  test("render the character result", () => {
    const { getByTestId } = render(<Counter />);
    const charLength = getByTestId("charLength");
    expect(charLength.innerHTML).toBe("Character: 0");
  });
  it("render the word result", () => {
    render(<Counter />);
    const wordLenth = screen.getByTestId("wordLength");
    expect(wordLenth).toBeTruthy();
  });
  test("render the word text", () => {
    render(<Counter />);
    const textAvailable = screen.getByText("Word: 0");
    expect(textAvailable).toBeInTheDocument();
  });

  test("change textarea and update result", () => {
    render(<Counter />);
    const textArea = screen.getByTestId("textArea");
    const charLength = screen.getByTestId("charLength");
    const wordLength = screen.getByTestId("wordLength");

    userEvent.type(textArea, "shubham");
    expect(charLength.innerHTML).toBe("Character: 7");
    expect(wordLength.innerHTML).toBe("Word: 1");
  });

  test("clear textarea and update result", () => {
    render(<Counter />);
    const textArea = screen.getByTestId("textArea");
    const clearBtn = screen.getByTestId("clearBtn");
    const charLength = screen.getByTestId("charLength");
    const wordLength = screen.getByTestId("wordLength");

    userEvent.type(textArea, "shubham");
    expect(charLength.innerHTML).toBe("Character: 7");
    expect(wordLength.innerHTML).toBe("Word: 1");

    //Both fireEvent and userEvent works as same
    // userEvent.click(clearBtn);
    // expect(charLength.innerHTML).toBe("Character: 0");
    // expect(wordLength.innerHTML).toBe("Word: 0");
    fireEvent.click(clearBtn);
    expect(charLength.innerHTML).toBe("Character: 0");
    expect(wordLength.innerHTML).toBe("Word: 0");
  });
});
