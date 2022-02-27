import RegisterForm from "./RegisterForm";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../setupTests";
import { BrowserRouter } from "react-router-dom";

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 'Image:'", () => {
      renderWithProviders(
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      );

      const renderedElement = screen.getByLabelText("Image:");

      expect(renderedElement).toBeInTheDocument();
    });
    test("Then it should render an input", () => {
      renderWithProviders(
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      );

      const renderedInput = screen.getAllByRole("textbox");

      expect(renderedInput).not.toBeNull();
    });
    test("Then it should render a Placeholder input", () => {
      renderWithProviders(
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      );

      const nameInput = screen.queryByPlaceholderText("Your Name");

      expect(nameInput).toBeInTheDocument();
    });
  });
});
