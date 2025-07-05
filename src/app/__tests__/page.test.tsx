import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from '../page';

// Mock Next.js components
vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className, ...props }: {
    src: string;
    alt: string;
    className?: string;
    [key: string]: unknown;
  }) => (
    <img src={src} alt={alt} className={className} {...props} />
  ),
}));

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...props }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('Landing Page', () => {
  it('renders the main landing page elements', () => {
    render(<Home />);
    
    // Check for main content structure
    expect(screen.getByRole('main')).toBeInTheDocument();
    
    // Check for background image
    expect(screen.getByAltText('245 Events Building Entrance')).toBeInTheDocument();
    
    // Check for logo
    expect(screen.getByAltText('245 Events')).toBeInTheDocument();
    
    // Check for headline
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Elevate your corporate gatherings...')).toBeInTheDocument();
    
    // Check for CTA button
    expect(screen.getByRole('link', { name: /book an event/i })).toBeInTheDocument();
  });

  it('has proper image optimization attributes', () => {
    render(<Home />);
    
    const backgroundImage = screen.getByAltText('245 Events Building Entrance');
    expect(backgroundImage).toHaveAttribute('src', '/images/backgrounds/hero-background.jpg');
    
    const logo = screen.getByAltText('245 Events');
    expect(logo).toHaveAttribute('src', '/images/logo/245 Logo.png');
    expect(logo).toHaveAttribute('width', '200');
    expect(logo).toHaveAttribute('height', '80');
  });

  it('implements proper navigation functionality', () => {
    render(<Home />);
    
    const bookButton = screen.getByRole('link', { name: /book an event/i });
    expect(bookButton).toHaveAttribute('href', '/book');
    expect(bookButton).toHaveAttribute('aria-label', 'Book an event at 245 Events');
  });

  it('has proper accessibility attributes', () => {
    render(<Home />);
    
    // Check semantic HTML structure
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    
    // Check ARIA labels
    const bookButton = screen.getByRole('link', { name: /book an event/i });
    expect(bookButton).toHaveAttribute('aria-label', 'Book an event at 245 Events');
    
    // Check image alt attributes
    expect(screen.getByAltText('245 Events Building Entrance')).toBeInTheDocument();
    expect(screen.getByAltText('245 Events')).toBeInTheDocument();
  });

  it('applies responsive design classes', () => {
    render(<Home />);
    
    const logo = screen.getByAltText('245 Events');
    expect(logo).toHaveClass('w-auto', 'h-16', 'sm:h-20', 'md:h-24');
    
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveClass('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'lg:text-6xl');
    
    const contentContainer = headline.closest('div');
    expect(contentContainer).toHaveClass('px-4', 'sm:px-8');
  });

  it('has proper focus management for keyboard navigation', () => {
    render(<Home />);
    
    const bookButton = screen.getByRole('link', { name: /book an event/i });
    expect(bookButton).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2');
  });

  it('implements proper CSS classes for design system', () => {
    render(<Home />);
    
    const bookButton = screen.getByRole('link', { name: /book an event/i });
    expect(bookButton).toHaveClass('bg-accent', 'hover:bg-accent-hover', 'border-radius-standard');
    
    const backgroundImage = screen.getByAltText('245 Events Building Entrance');
    expect(backgroundImage).toHaveClass('animate-slow-pan', 'object-cover');
  });

  it('has proper visual hierarchy with appropriate text sizes', () => {
    render(<Home />);
    
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveClass('font-bold', 'text-white', 'leading-tight');
    
    const bookButton = screen.getByRole('link', { name: /book an event/i });
    expect(bookButton).toHaveClass('text-lg', 'font-semibold');
  });
}); 