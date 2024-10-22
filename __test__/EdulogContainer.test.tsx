import React from "react";
import { render } from "@testing-library/react";
import EdulogContainer from "@/components/commons/EdulogContainer";

describe("EdulogContainer", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <EdulogContainer>
        <h1>Test Title</h1>
      </EdulogContainer>
    );
    expect(getByText("Test Title")).toBeInTheDocument();
  });
});
