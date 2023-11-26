import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Book Buddy app', () => {
  render(<App />);
  const headerElement = screen.getByText(/Book Buddy/);
  expect(headerElement).toBeInTheDocument();

  // main rendering tests
  expect(screen.getByTestId("heading")).toHaveTextContent(/Book Buddy/);

  // input check - input should not have anything inside of it at load
  expect(screen.getByRole("textbox")).toHaveDisplayValue("");

  // check that the input exists
  expect(screen.getByRole("textbox")).toBeTruthy();

  // check that the search button exists
  expect(screen.getByRole("button", {name:"Search"})).toBeInTheDocument();

  // check that the search results don't exist at initial render
  expect(screen.queryByTestId("search-results")).toBeNull();

});
