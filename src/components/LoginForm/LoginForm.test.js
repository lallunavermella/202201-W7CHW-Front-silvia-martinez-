import { screen } from "@testing-library/react";
import renderWithProviders from "../../setupTests";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 'Password'", () => {
      renderWithProviders(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      );

      const renderedElement = screen.getByLabelText("Password:");

      expect(renderedElement).toBeInTheDocument();
    });
    test("Then it should render an input", () => {
      renderWithProviders(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      );

      const renderedInput = screen.getAllByRole("textbox");

      expect(renderedInput).not.toBeNull();
    });
    test("Then it should render a Placeholder input", () => {
      renderWithProviders(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      );

      const nameInput = screen.queryByPlaceholderText("Your Username");

      expect(nameInput).toBeInTheDocument();
    });
  });
});
