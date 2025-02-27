import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from '../src/components/NavigationBar/NavigationBar';

describe("NavigationBar component", () => {
  it("renders a simple navbar with links and a span element", () => {
    const { container } = render(<BrowserRouter><NavigationBar /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  })

  it("does not render a button when in the home route", () => {
    render(<BrowserRouter><NavigationBar /></BrowserRouter>);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  })

  it("does render a button when in the shop route", () => {
    render(<BrowserRouter><NavigationBar checkout={true} /></BrowserRouter>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  })

  it("counts correctly the number of items in the cart", () => {
    const shoppingCart = [
                          {name: "item1", quantity: 5},
                          {name: "item2", quantity: 6},
                          {name: "item3", quantity: 4}
                        ];
    
    render(<BrowserRouter><NavigationBar shoppingCart={shoppingCart} /></BrowserRouter>);
    expect(screen.getByRole("textbox").textContent).toMatch(/Your cart currently has 15 items./);  
  })
})