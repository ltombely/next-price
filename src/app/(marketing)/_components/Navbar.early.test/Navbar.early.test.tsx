// Unit tests for: Navbar

import { render, screen } from '@testing-library/react'
import React from 'react'
import Navbar from '../Navbar'
import '@testing-library/jest-dom'

// Navbar.test.tsx
// Navbar.test.tsx
// Mocking the BrandLogo component

// Mocking the necessary components from @clerk/nextjs
jest.mock('@clerk/nextjs', () => ({
  SignedIn: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SignedOut: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SignInButton: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  )
}))

// Mocking the Link component from next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    children,
    href
  }: {
    children: React.ReactNode
    href: string
  }) => <a href={href}>{children}</a>
}))

describe('Navbar() Navbar method', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  // Happy path: Test if the Navbar renders correctly with all links and components
  it('should render the Navbar with all links and components', () => {
    render(<Navbar />)
    expect(screen.getByText('MockBrandLogo')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  // Happy path: Test if the Dashboard link is visible when signed in
  it('should show the Dashboard link when the user is signed in', () => {
    render(<Navbar />)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  // Happy path: Test if the Login button is visible when signed out
  it('should show the Login button when the user is signed out', () => {
    render(<Navbar />)
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  // Edge case: Test if the Navbar handles missing BrandLogo gracefully
  it('should handle missing BrandLogo gracefully', () => {
    jest.mock('@/components/BrandLogo', () => ({
      __esModule: true,
      default: () => null
    }))
    render(<Navbar />)
    expect(screen.queryByText('MockBrandLogo')).not.toBeInTheDocument()
  })

  // Edge case: Test if the Navbar handles empty links gracefully
  it('should handle empty links gracefully', () => {
    jest.mock('next/link', () => ({
      __esModule: true,
      default: ({ children }: { children: React.ReactNode }) => (
        <span>{children}</span>
      )
    }))
    render(<Navbar />)
    expect(screen.queryByText('Features')).not.toBeInTheDocument()
    expect(screen.queryByText('Pricing')).not.toBeInTheDocument()
    expect(screen.queryByText('About')).not.toBeInTheDocument()
  })
})

// End of unit tests for: Navbar
