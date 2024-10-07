'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Cpu, Menu, X } from "lucide-react"
import ModeToggle from './toggle-theme'
import { UserButton, useAuth } from '@clerk/nextjs'

interface NavItem {
  href: string
  label: string
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/groq', label: 'Chat' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Navbar() {

  const { isSignedIn } = useAuth() // Using the Clerk client-side hook for authentication

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Cpu className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold">GroqAI Chat</h1>
          </Link>

          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-primary" >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            {isSignedIn ? (
              <Link href='/groq'>
                <UserButton />
              </Link>
            ) : (
              <>
                <Link href='/sign-up'>
                  <Button variant="outline">Sign Up</Button>
                </Link>
                <Link href='/sign-in'>
                  <Button>Sign In</Button>
                </Link>
              </>
            )}
          </div>

          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu" >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-primary" >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <ModeToggle />
              {isSignedIn ? (
                <Link href='/groq'>
                  <UserButton />
                </Link>
              ) : (
                <>
                  <Link href='/sign-up'>
                    <Button variant="outline">Sign Up</Button>
                  </Link>
                  <Link href='/sign-in'>
                    <Button>Sign In</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
