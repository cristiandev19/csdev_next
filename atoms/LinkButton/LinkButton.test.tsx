import { render, screen } from '@testing-library/react';
import LinkButton from './LinkButton';

describe('MainSection', () => {
  beforeEach(() => {
    render(<LinkButton href='"hola"'>Child</LinkButton>);
  });

  it('renders a heading', () => {
    const child = screen.getByText('Child');

    expect(child).toBeInTheDocument();
  });
});
