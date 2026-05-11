// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NetScanner title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NetScanner/i);
    expect(titleElement).toBeInTheDocument();
});
