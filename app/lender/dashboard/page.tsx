"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Plus,
  Package,
  DollarSign,
  TrendingUp,
  Eye,
  MessageCircle,
  Calendar,
  Star,
  Clock,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  Bell,
  User,
  Settings,
  LogOut,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LenderDashboard() {
  const [activeTab, setActiveTab] = useState("listings")

  const listings = [
    {
      id: "1",
      title: "Canon EOS R5 Camera",
      category: "Electronics",
      price: 500,
      status: "active",
      views: 156,
      lastRented: "2024-01-10",
      totalEarnings: 15000,
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.8,
      reviews: 24,
    },
    {
      id: "2",
      title: "MacBook Pro 16-inch",
      category: "Electronics",
      price: 800,
      status: "rented",
      views: 89,
      lastRented: "2024-01-15",
      totalEarnings: 12000,
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
      reviews: 18,
    },
    {
      id: "3",
      title: "Bosch Drill Set",
      category: "Tools",
      price: 150,
      status: "inactive",
      views: 45,
      lastRented: "2023-12-20",
      totalEarnings: 3000,
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.6,
      reviews: 12,
    },
  ]

  const requests = [
    {
      id: "1",
      renter: "John Doe",
      item: "Canon EOS R5 Camera",
      dates: "Jan 20-23, 2024",
      amount: 1500,
      status: "pending",
      message: "Need for wedding photography",
      avatar: "/placeholder.svg?height=40&width=40",
      requestTime: "2 hours ago",
    },
    {
      id: "2",
      renter: "Sarah Wilson",
      item: "MacBook Pro 16-inch",
      dates: "Jan 25-30, 2024",
      amount: 4000,
      status: "pending",
      message: "Required for client presentation",
      avatar: "/placeholder.svg?height=40&width=40",
      requestTime: "5 hours ago",
    },
  ]

  const earningsData = {
    thisMonth: 8500,
    lastMonth: 6200,
    growth: 37,
    totalEarnings: 45000,
    pendingWithdrawal: 8500,
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "rented":
        return "bg-blue-100 text-blue-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Available"
      case "rented":
        return "Currently Rented"
      case "inactive":
        return "Inactive"
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
              <span className="text-gray-600">Lender Dashboard</span>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="text-sm font-medium">Rajesh Kumar</span>
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
                <Button variant="ghost" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="h-4 w-4 mr-2" />
                  My Listings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Requests
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Messages
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Star className="h-4 w-4 mr-2" />
                  Reviews
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Earnings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start text-red-600">
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
              <h1 className="text-3xl font-bold mb-2">Earn from What You Already Own</h1>
              <p className="text-blue-100 mb-6">List, manage, and grow your income from unused items.</p>
              <div className="flex space-x-4">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Item
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  View Analytics
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">₹{earningsData.thisMonth.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">This Month</p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex items-center space-x-1 text-sm">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-green-600">+{earningsData.growth}%</span>
                    <span className="text-gray-500">vs last month</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{listings.length}</p>
                    <p className="text-sm text-gray-600">Active Listings</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Eye className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">290</p>
                    <p className="text-sm text-gray-600">Total Views</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{requests.length}</p>
                    <p className="text-sm text-gray-600">Pending Requests</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Content Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Manage Your Business</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="listings">My Listings</TabsTrigger>
                    <TabsTrigger value="requests">Requests ({requests.length})</TabsTrigger>
                    <TabsTrigger value="earnings">Earnings</TabsTrigger>
                  </TabsList>

                  <TabsContent value="listings" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Your Items</h3>
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Item
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {listings.map((listing) => (
                        <Card key={listing.id} className="p-4">
                          <div className="flex items-center space-x-4">
                            <Image
                              src={listing.image || "/placeholder.svg"}
                              alt={listing.title}
                              width={80}
                              height={80}
                              className="rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-semibold text-lg">{listing.title}</h4>
                                  <p className="text-gray-600">{listing.category}</p>
                                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                    <span className="flex items-center">
                                      <Eye className="h-3 w-3 mr-1" />
                                      {listing.views} views
                                    </span>
                                    <span>Last rented: {listing.lastRented}</span>
                                    <div className="flex items-center">
                                      <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                                      <span>
                                        {listing.rating} ({listing.reviews})
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <Badge className={getStatusColor(listing.status)}>
                                    {getStatusText(listing.status)}
                                  </Badge>
                                  <p className="text-lg font-bold mt-1">₹{listing.price}/day</p>
                                  <p className="text-sm text-gray-500">
                                    Earned: ₹{listing.totalEarnings.toLocaleString()}
                                  </p>
                                </div>
                              </div>
                              <div className="flex space-x-2 mt-4">
                                <Button size="sm" variant="outline">
                                  <Edit className="h-4 w-4 mr-1" />
                                  Edit
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  Availability
                                </Button>
                                <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="requests" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Rental Requests</h3>
                      <Badge variant="secondary">{requests.length} pending</Badge>
                    </div>

                    <div className="space-y-4">
                      {requests.map((request) => (
                        <Card key={request.id} className="p-4">
                          <div className="flex items-start space-x-4">
                            <Image
                              src={request.avatar || "/placeholder.svg"}
                              alt={request.renter}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-semibold">{request.renter}</h4>
                                  <p className="text-gray-600">
                                    wants to rent: <span className="font-medium">{request.item}</span>
                                  </p>
                                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                    <span className="flex items-center">
                                      <Calendar className="h-3 w-3 mr-1" />
                                      {request.dates}
                                    </span>
                                    <span className="flex items-center">
                                      <Clock className="h-3 w-3 mr-1" />
                                      {request.requestTime}
                                    </span>
                                  </div>
                                  {request.message && (
                                    <p className="text-sm text-gray-700 mt-2 p-2 bg-gray-50 rounded">
                                      "{request.message}"
                                    </p>
                                  )}
                                </div>
                                <div className="text-right">
                                  <p className="text-lg font-bold">₹{request.amount.toLocaleString()}</p>
                                  <Badge className="bg-yellow-100 text-yellow-800 mt-1">{request.status}</Badge>
                                </div>
                              </div>
                              <div className="flex space-x-2 mt-4">
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Accept
                                </Button>
                                <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Decline
                                </Button>
                                <Button size="sm" variant="outline">
                                  <MessageCircle className="h-4 w-4 mr-1" />
                                  Message
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="earnings" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="p-6">
                        <h3 className="font-semibold text-lg mb-4">Earnings Overview</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">This Month</span>
                            <span className="text-2xl font-bold text-green-600">
                              ₹{earningsData.thisMonth.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Last Month</span>
                            <span className="text-lg">₹{earningsData.lastMonth.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Growth</span>
                            <span className="text-green-600 font-medium">+{earningsData.growth}%</span>
                          </div>
                          <Progress value={75} className="w-full" />
                          <p className="text-sm text-gray-500">75% of monthly goal achieved</p>
                        </div>
                      </Card>

                      <Card className="p-6">
                        <h3 className="font-semibold text-lg mb-4">Withdrawal</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Available Balance</span>
                            <span className="text-2xl font-bold">
                              ₹{earningsData.pendingWithdrawal.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Total Earnings</span>
                            <span className="text-lg">₹{earningsData.totalEarnings.toLocaleString()}</span>
                          </div>
                          <Button className="w-full bg-orange-500 hover:bg-orange-600">Withdraw Funds</Button>
                          <p className="text-xs text-gray-500 text-center">KYC verification required for withdrawals</p>
                        </div>
                      </Card>
                    </div>

                    <Card className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Monthly Earnings Chart</h3>
                      <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Chart visualization would go here</p>
                      </div>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
