import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe("Pruebas en CounterApp", () => {
  const value = 100;

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el valor inicial de 100", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeTruthy();
  });

  test("debe incrementar con el botón +1", () => {
    render(<CounterApp value={20} />);

    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("21")).toBeTruthy();
  });

  test("debe decrementar con el botón -1", () => {
    render(<CounterApp value={20} />);
    // screen.debug();

    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("19")).toBeTruthy();
  });

  test("debe restaurar el contador 20", () => {
    render(<CounterApp value={20} />);
    // screen.debug();

    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // screen.debug();
    // fireEvent.click( screen.getByText('reset'));
    // screen.debug();
    // expect(screen.getByText('20')).toBeTruthy();

    fireEvent.click(
      screen.getByRole("button", { name: "btn-reset" })
      );

      expect( screen.getByText(20)).toBeTruthy();
  });
});
