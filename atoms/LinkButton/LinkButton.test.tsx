import { render, screen } from '@testing-library/react';
import LinkButton from './LinkButton';

describe('Test of the Link button component', () => {
  it('Should render the link renders the link button with internal mode', () => {
    const text = 'Child';
    const href = '/contact';
    render(<LinkButton href={href}>{text}</LinkButton>);
    const link = screen.getByText(text);

    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe(href);
  });
});
