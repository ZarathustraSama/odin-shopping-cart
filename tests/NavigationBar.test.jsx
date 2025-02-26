import { describe, it, expect } from 'vitest';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from '../src/components/NavigationBar/NavigationBar';

describe("NavigationBar component", () => {
  it("renders a simple navbar with links and a span element", () => {
    const { container } = render(<BrowserRouter><NavigationBar /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  })
})