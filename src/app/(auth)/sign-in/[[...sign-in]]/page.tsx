import { SignIn } from '@clerk/nextjs'
import { Cpu } from 'lucide-react'

export default function SignInPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 px-4">
      <div className="w-full max-w-md flex flex-col justify-center items-center">
        <div className="mb-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <Cpu className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold ml-2">GroqAI Chat</h1>
          </div>
          <p className="text-muted-foreground">Sign in to start chatting with GroqAI</p>
        </div>
        <SignIn
          appearance={{
            elements: {
              card: 'shadow-xl rounded-xl bg-white p-8',
              headerTitle: 'text-2xl font-bold text-center mb-4',
              headerSubtitle: 'text-center mb-6 text-muted-foreground',
              formButtonPrimary: 'bg-primary hover:bg-primary/90 text-primary-foreground transition-colors',
              formFieldLabel: 'text-sm font-medium text-muted-foreground',
              formFieldInput: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50',
              footerActionLink: 'text-primary hover:text-primary/90 font-medium',
              dividerLine: 'bg-muted',
              dividerText: 'text-muted-foreground',
              socialButtonsBlockButton: 'border border-gray-300 hover:bg-muted transition-colors',
              socialButtonsBlockButtonText: 'text-muted-foreground font-medium',
            },
          }}
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
        />
      </div>
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 GroqAI Chat. All rights reserved.</p>
      </footer>
    </div>
  )
}