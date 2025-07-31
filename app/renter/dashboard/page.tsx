"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Calendar,
  MessageCircle,
  CreditCard,
  Star,
  MapPin,
  Package,
  ArrowRight,
  Filter,
  Bell,
  User,
  Settings,
  LogOut,
  Heart,
  History,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

export default function RenterDashboard() {
  const [activeTab, setActiveTab] = useState("active")
  const { user, loading, logout } = useAuth()
  const router = useRouter()

  // Simple authentication check
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/login")
    }
  }, [user, loading, router])

  const handleLogout = async () => {
    try {
      await logout()
      router.replace("/")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  // Show message if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Authentication Required</h2>
          <p className="text-gray-600">Please log in to access this page.</p>
        </div>
      </div>
    )
  }

  const activeRentals = [
    {
      id: "1",
      item: "Canon EOS R5 Camera",
      lender: "Rajesh Kumar",
      startDate: "2024-01-15",
      endDate: "2024-01-18",
      status: "active",
      price: 1500,
      image: "/placeholder.svg?height=80&width=80",
      location: "Mumbai",
      returnIn: "2 days",
    },
    {
      id: "2",
      item: "MacBook Pro 16-inch",
      lender: "Priya Sharma",
      startDate: "2024-01-10",
      endDate: "2024-01-17",
      status: "pickup_pending",
      price: 5600,
      image: "/placeholder.svg?height=80&width=80",
      location: "Bangalore",
      returnIn: "5 days",
    },
  ]

  const pastRentals = [
    {
      id: "3",
      item: "Bosch Drill Set",
      lender: "Amit Singh",
      startDate: "2024-01-01",
      endDate: "2024-01-05",
      status: "completed",
      price: 600,
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      location: "Delhi",
    },
    {
      id: "4",
      item: "Yamaha Guitar",
      lender: "Neha Gupta",
      startDate: "2023-12-20",
      endDate: "2023-12-27",
      status: "completed",
      price: 1400,
      rating: 4,
      image: "/placeholder.svg?height=80&width=80",
      location: "Pune",
    },
  ]

  const messages = [
    {
      id: "1",
      sender: "Rajesh Kumar",
      message: "Camera is ready for pickup. Please confirm timing.",
      time: "2 hours ago",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      sender: "Priya Sharma",
      message: "Thanks for renting! Hope you enjoy the MacBook.",
      time: "1 day ago",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const favorites = [
    {
      id: "1",
      title: "Professional DSLR Camera",
      price: 400,
      location: "Mumbai",
      rating: 4.8,
      image: "/placeholder.svg?height=120&width=160",
    },
    {
      id: "2",
      title: "Gaming Laptop",
      price: 800,
      location: "Bangalore",
      rating: 4.9,
      image: "/placeholder.svg?height=120&width=160",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "pickup_pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Active"
      case "pickup_pending":
        return "Pickup Pending"
      case "completed":
        return "Completed"
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RZ</span>
                </div>
                <span className="text-xl font-bold text-blue-900">Rental Zone</span>
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Renter Dashboard</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search items..." className="pl-10 w-64" />
              </div>
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  {user?.displayName ? (
                    <span className="text-sm font-medium text-white">
                      {user.displayName.split(' ').map(n => n[0]).join('')}
                    </span>
                  ) : (
                    <User className="h-4 w-4 text-gray-600" />
                  )}
                </div>
                <span className="text-sm font-medium">
                  {user?.displayName || user?.email || "User"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-4">
              <div className="space-y-2">
                <Link href="/renter/rentals" className="w-full">
                  <Button variant="ghost" className="w-full justify-start">
                    <Package className="h-4 w-4 mr-2" />
                    My Rentals
                  </Button>
                </Link>
                <Link href="/browse" className="w-full">
                  <Button variant="ghost" className="w-full justify-start">
                    <Search className="h-4 w-4 mr-2" />
                    Browse Items
                  </Button>
                </Link>
                <Link href="/renter/favorites" className="w-full">
                  <Button variant="ghost" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Favorites
                  </Button>
                </Link>
                <Link href="/renter/messages" className="w-full">
                  <Button variant="ghost" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Messages
                  </Button>
                </Link>
                <Link href="/renter/payments" className="w-full">
                  <Button variant="ghost" className="w-full justify-start">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payments
                  </Button>
                </Link>
                <Link href="/renter/profile" className="w-full">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>
                <Link href="/renter/settings" className="w-full">
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-red-600"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-8 text-white">
              <h1 className="text-3xl font-bold mb-2">Find What You Need, Right Around the Corner</h1>
              <p className="text-blue-100 mb-6">Track, manage, and review all your rentals in one place.</p>
              <div className="flex space-x-4">
                <Link href="/browse">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Browse Items
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  View Favorites
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Package className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">2</p>
                    <p className="text-sm text-gray-600">Active Rentals</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <History className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-gray-600">Total Rentals</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Heart className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-sm text-gray-600">Favorites</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">₹15,240</p>
                    <p className="text-sm text-gray-600">Total Spent</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Rentals Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>My Rentals</span>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="active">Active Rentals</TabsTrigger>
                    <TabsTrigger value="past">Past Rentals</TabsTrigger>
                  </TabsList>

                  <TabsContent value="active" className="space-y-4">
                    {activeRentals.map((rental) => (
                      <Card key={rental.id} className="p-4">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={rental.image || "/placeholder.svg"}
                            alt={rental.item}
                            width={80}
                            height={80}
                            className="rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-lg">{rental.item}</h3>
                                <p className="text-gray-600">Lender: {rental.lender}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                  <span className="flex items-center">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {rental.location}
                                  </span>
                                  <span className="flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    {rental.startDate} to {rental.endDate}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <Badge className={getStatusColor(rental.status)}>{getStatusText(rental.status)}</Badge>
                                <p className="text-lg font-bold mt-1">₹{rental.price}</p>
                                <p className="text-sm text-gray-500">Return in {rental.returnIn}</p>
                              </div>
                            </div>
                            <div className="flex space-x-2 mt-4">
                              <Button size="sm" variant="outline">
                                <MessageCircle className="h-4 w-4 mr-1" />
                                Chat
                              </Button>
                              <Button size="sm" variant="outline">
                                Track Order
                              </Button>
                              {rental.status === "active" && (
                                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                                  Extend Rental
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="past" className="space-y-4">
                    {pastRentals.map((rental) => (
                      <Card key={rental.id} className="p-4">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={rental.image || "/placeholder.svg"}
                            alt={rental.item}
                            width={80}
                            height={80}
                            className="rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-lg">{rental.item}</h3>
                                <p className="text-gray-600">Lender: {rental.lender}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                  <span className="flex items-center">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {rental.location}
                                  </span>
                                  <span className="flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    {rental.startDate} to {rental.endDate}
                                  </span>
                                </div>
                                {rental.rating && (
                                  <div className="flex items-center space-x-1 mt-2">
                                    <span className="text-sm text-gray-600">Your rating:</span>
                                    {[...Array(rental.rating)].map((_, i) => (
                                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                  </div>
                                )}
                              </div>
                              <div className="text-right">
                                <Badge className={getStatusColor(rental.status)}>{getStatusText(rental.status)}</Badge>
                                <p className="text-lg font-bold mt-1">₹{rental.price}</p>
                              </div>
                            </div>
                            <div className="flex space-x-2 mt-4">
                              <Button size="sm" variant="outline">
                                Rent Again
                              </Button>
                              <Button size="sm" variant="outline">
                                Download Invoice
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Messages & Favorites */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Recent Messages */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Recent Messages</span>
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      <Image
                        src={message.avatar || "/placeholder.svg"}
                        alt={message.sender}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{message.sender}</span>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{message.message}</p>
                        {message.unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Favorites */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Your Favorites</span>
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {favorites.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span>₹{item.price}/day</span>
                          <span>•</span>
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs">{item.rating}</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Rent Now
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
