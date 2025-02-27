import { describe, it, expect } from 'vitest';
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import ShoppingPage from '../src/components/ShoppingPage/ShoppingPage';


describe("ShoppingPage", () => {
  it("should render a NavBar component before fetching", () => {
    const { container } = render(<BrowserRouter><ShoppingPage /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  })

  it("should render fetched data", async () => {
    await act(async() => {
      render(<BrowserRouter><ShoppingPage /></BrowserRouter>)
    });
    expect((await screen.findAllByRole("cartItem")).length).toBe(10);
  })
})