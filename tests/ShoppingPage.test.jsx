import { describe, it, expect } from 'vitest';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import ShoppingPage from '../src/components/ShoppingPage/ShoppingPage';

describe("ShoppingPage", () => {
  it("should render a NavBar component, and a list of items fetched, each put in a card", () => {
    const { container } = render(<BrowserRouter><ShoppingPage /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  })
})