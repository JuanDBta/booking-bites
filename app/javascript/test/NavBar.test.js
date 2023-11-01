import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import NavBar from '../components/NavBar';

const renderWithRedux = (component, initialState = {}) => {
  const mockStore = configureStore([])(initialState);

  return {
    ...render(
      <Provider store={mockStore}>
        <MemoryRouter>
          {component}
        </MemoryRouter>
      </Provider>
    ),
    store: mockStore,
  };
};

describe('NavBar Component', () => {
  test('renders Navbar with default state', () => {
    const { getByText } = renderWithRedux(<NavBar />);
    expect(getByText('BookingBites')).toBeInTheDocument;
  });

  test('toggles navigation on menu click', () => {
    const { container } = renderWithRedux(<NavBar />);
    const menuButton = container.querySelector('.menu-top_div');
    fireEvent.click(menuButton);
    expect(container.querySelector('.app-header')).toBeInTheDocument;
  });
});
