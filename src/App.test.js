import { render, screen } from '@testing-library/react';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

test('renders learn react link', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Welcome to React Shopping store/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Routing Test About Us', () => {
  test('should navigate to the login page ', () => {
    render(
      <MemoryRouter initialEntries={["/aboutus"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </MemoryRouter>
    ); 
    // Assert 
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();

  })


})

// Test the login features 
test('render login and submit the form', () => {
     
})