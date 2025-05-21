import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

describe("Home page", () => {
  it("muestra el texto de inicio", () => {
    render(<Home />);
    // Solo hay un texto así, getByText es correcto
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  });

  it("muestra el enlace de documentación", () => {
    render(<Home />);
    // Solo hay un enlace con este nombre, getByRole es correcto
    expect(screen.getByRole("link", { name: /Docs/i })).toBeInTheDocument();
  });

  it("muestra todos los enlaces principales", () => {
    render(<Home />);
    // Puede haber más de un enlace con el mismo nombre, usa getAllByRole
    expect(
      screen.getAllByRole("link", { name: /Docs/i }).length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByRole("link", { name: /Learn/i }).length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByRole("link", { name: /Templates/i }).length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByRole("link", { name: /Deploy/i }).length
    ).toBeGreaterThanOrEqual(1);
  });

  it("muestra los títulos de las tarjetas", () => {
    render(<Home />);
    // Puede haber más de un texto igual, usa getAllByText
    expect(screen.getAllByText(/Docs/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Learn/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Templates/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Deploy/i).length).toBeGreaterThanOrEqual(1);
  });

  it("muestra las imágenes principales", () => {
    render(<Home />);
    // Alt únicos, getByAltText es correcto
    expect(screen.getByAltText("Vercel Logo")).toBeInTheDocument();
    expect(screen.getByAltText("Next.js Logo")).toBeInTheDocument();
  });
});
