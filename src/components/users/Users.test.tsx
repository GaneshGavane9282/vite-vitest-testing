import { render, screen } from '@testing-library/react';
import Users from './Users';
import { server } from '../../mocks/Server';
import { http, HttpResponse } from 'msw';

describe('User Component', () => {
  test('render correctly', () => {
    render(<Users />);
    const textElement = screen.getByText(/users/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders a list of users', async () => {
    render(<Users />);
    const userElements = await screen.findAllByRole('listitem');
    expect(userElements).toHaveLength(3);
  })

  test('renders error', () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.error();
      })
    );
  });
});
