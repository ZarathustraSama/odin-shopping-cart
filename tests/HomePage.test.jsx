import { describe, it, expect } from 'vitest';
import { render } from "@testing-library/react";
import HomePage from '../src/components/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';

describe("HomePage", () => {
  it("should render a NavBar component, a header and a paragraph", () => {
    const { container } = render(<BrowserRouter><HomePage /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  })
})