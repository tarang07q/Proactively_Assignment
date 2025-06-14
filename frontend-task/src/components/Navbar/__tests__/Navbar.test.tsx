import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@/test/utils';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('displays logo placeholder', () => {
    render(<Navbar />);
    const logo = screen.getByText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('navbar__logo-placeholder');
  });

  it('shows search input on desktop', () => {
    render(<Navbar />);
    const searchInput = screen.getByRole('searchbox', { name: /search/i });
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('placeholder', 'Search...');
  });

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    const menu = screen.getByRole('navigation').querySelector('#navbar-menu');
    
    // Menu should be hidden initially
    expect(menu).toHaveAttribute('aria-hidden', 'true');
    
    // Click the menu button
    fireEvent.click(menuButton);
    
    // Menu should be visible
    expect(menu).toHaveAttribute('aria-hidden', 'false');
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    
    // Click again to close
    fireEvent.click(menuButton);
    
    // Menu should be hidden again
    expect(menu).toHaveAttribute('aria-hidden', 'true');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('contains all navigation links', () => {
    render(<Navbar />);
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
    
    links.forEach(link => {
      const linkElement = screen.getByRole('link', { name: link });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveClass('navbar__link');
    });
  });

  it('has a call-to-action button', () => {
    render(<Navbar />);
    const ctaButton = screen.getByRole('button', { name: /get started/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveClass('btn', 'btn--primary');
  });

  it('changes appearance on scroll', () => {
    render(<Navbar />);
    const navbar = screen.getByRole('navigation');
    
    // Initially should not have scrolled class
    expect(navbar).not.toHaveClass('navbar--scrolled');
    
    // Simulate scroll
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    
    // Should have scrolled class
    expect(navbar).toHaveClass('navbar--scrolled');
  });
}); 