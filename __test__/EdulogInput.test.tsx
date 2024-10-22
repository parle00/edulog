import React from "react";
import { render, screen } from "@testing-library/react";
import EdulogInput from "@/components/commons/EdulogInput";

describe("EdulogInput", () => {
  it("renders label correctly", () => {
    render(<EdulogInput label="Test Label" name="test" />);
  });
});
