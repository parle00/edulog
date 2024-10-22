import EdulogButton from "@/components/commons/EdulogButton";
import { render, screen, fireEvent } from "@testing-library/react";

describe("EdulogButton", () => {
  test("renders the button with the correct text", () => {
    render(<EdulogButton>Click Me</EdulogButton>);

    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click Me");
  });

  test("handles click events", () => {
    const handleClick = jest.fn();
    render(<EdulogButton onClick={handleClick}>Click Me</EdulogButton>);

    const buttonElement = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
