import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

describe("Home page", () => {
  it("muestra el texto de inicio", () => {
    render(<Home />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  });

  it("muestra el enlace de documentación", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /Docs/i })).toBeInTheDocument();
  });
});
