'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useUser } from '@clerk/nextjs'

export default function ChatInterface() {
  const { user } = useUser();
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I assist you today?' },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { role: 'user', content: input }
      setMessages(prev => [...prev, userMessage])
      setInput('')
      setIsLoading(true)

      // Simulating API call to GroqAI
      try {
        // Replace this with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        const aiResponse = { role: 'assistant', content: 'This is a simulated response from GroqAI.' }
        setMessages(prev => [...prev, aiResponse])
      } catch (error) {
        console.error('Error fetching response:', error)
        setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }])
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] container mx-auto px-4 py-8 bg-background">
      <Card className="flex-grow flex flex-col">
        <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
              <div className={`flex items-start space-x-2 ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
  {message.role === 'user' && user ? ( // Check if the message is from the user and the user is present
    <div className="avatar">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img 
          src={user.imageUrl} 
          alt={user.username || user.emailAddresses[0].emailAddress} 
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  ) : (
    <Avatar className={message.role === 'user' ? 'bg-primary' : 'bg-secondary'}>
      <AvatarFallback>
        {message.role === 'user' ? (
          <User className="text-primary-foreground" />
        ) : (
          <Bot className="text-secondary-foreground" />
        )}
      </AvatarFallback>
    </Avatar>
  )}
  
  <CardContent className={`p-3 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'} max-w-[80%]`}>
    {message.content}
  </CardContent>
</div>

            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="flex items-start space-x-2">
                <Avatar className="bg-secondary">
                  <AvatarFallback><Bot className="text-secondary-foreground" /></AvatarFallback>
                </Avatar>
                <Skeleton className="h-10 w-[250px]" />
              </div>
            </div>
          )}
        </ScrollArea>
        <CardContent className="p-4 border-t">
          <form onSubmit={(e) => { e.preventDefault(); handleSend() }} className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className="flex-grow"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="w-4 h-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}