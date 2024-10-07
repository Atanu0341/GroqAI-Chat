import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { featureCardData } from "@/lib/data"
import { auth } from "@clerk/nextjs/server"
import { ArrowRight, Cpu, Zap, MessageSquare, Lock } from "lucide-react"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  // Uncomment to redirect authenticated users to the /groq page
  const { userId } = auth()
  if (userId) {
    redirect('/groq')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted py-20 flex flex-col justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Experience the Future of AI Chat</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">Powered by GroqAI for lightning-fast responses and unparalleled intelligence.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose GroqAI Chat?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featureCardData.map((feature, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      {/* Render the icon component directly */}
                      <feature.icon className="h-6 w-6 text-primary" />
                      <span>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">See GroqAI in Action</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="GroqAI Chat Demo"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold">Lightning-Fast Responses</h3>
                <p className="text-muted-foreground">Experience the power of GroqAI with near-instantaneous responses to your queries. Our advanced AI understands context and provides accurate, relevant information in milliseconds.</p>
                <Button asChild>
                  <Link href="/demo">Try Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience GroqAI?</h2>
            <p className="text-xl mb-8">Join thousands of users already benefiting from our advanced AI chat.</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/sign-up">Sign Up Now</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">GroqAI Chat</span>
            </div>
            <nav className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
              <Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">Contact Us</Link>
            </nav>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} GroqAI Chat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}