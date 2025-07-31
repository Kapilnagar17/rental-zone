"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, MessageCircle, Send, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RenterMessagesPage() {
  const messages = [
    {
      id: "1",
      sender: "Rajesh Kumar",
      message: "Camera is ready for pickup. Please confirm timing.",
      time: "2 hours ago",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40",
      item: "Canon EOS R5 Camera",
    },
    {
      id: "2",
      sender: "Priya Sharma",
      message: "Thanks for renting! Hope you enjoy the MacBook.",
      time: "1 day ago",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
      item: "MacBook Pro 16-inch",
    },
    {
      id: "3",
      sender: "Amit Singh",
      message: "Drill set is available for pickup tomorrow.",
      time: "3 days ago",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
      item: "Bosch Drill Set",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/renter/dashboard" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Dashboard</span>
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Messages</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Communicate with lenders and track your conversations</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Message List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <CardTitle>Conversations</CardTitle>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search messages..." className="pl-10" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className="flex items-center space-x-3 p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                    >
                      <div className="relative">
                        <Image
                          src={message.avatar || "/placeholder.svg"}
                          alt={message.sender}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        {message.unread && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm truncate">{message.sender}</span>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-xs text-gray-600 truncate">{message.item}</p>
                        <p className="text-sm text-gray-600 truncate">{message.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="h-96">
              <CardHeader className="border-b">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Rajesh Kumar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Rajesh Kumar</h3>
                    <p className="text-sm text-gray-600">Canon EOS R5 Camera</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 h-80 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-blue-900 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">Hi, when can I pick up the camera?</p>
                      <p className="text-xs opacity-75 mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">Camera is ready for pickup. Please confirm timing.</p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-900 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">Great! I'll come tomorrow at 2 PM. Is that okay?</p>
                      <p className="text-xs opacity-75 mt-1">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input placeholder="Type your message..." className="flex-1" />
                  <Button size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 