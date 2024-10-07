import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import React from 'react'

export const Auth = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton><Button className='bg-slate-300 text-black hover:bg-gray-200'>Sign In</Button></SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </div>
  )
}