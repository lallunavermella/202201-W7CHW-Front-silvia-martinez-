import { BrowserRouter } from "react-router-dom";
import App from "./App";
import renderWithProviders from "./setupTests";

test("renders learn react link", () => {
  renderWithProviders(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
