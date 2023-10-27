import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from '../components/Header'; // Update the import path



test('renders a header with the blog name', () => {
  const { getByText } = render(<Header name="Your Blog Name" />);
  const headerElement = getByText("Your Blog Name");
  expect(headerElement).toBeInTheDocument();
});


