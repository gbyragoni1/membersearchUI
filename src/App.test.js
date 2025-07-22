import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const elem = screen.getByText(/Member Search/i);
  expect(elem).toBeInTheDocument();
});
