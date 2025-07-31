"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Package,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Search,
  Eye,
  Ban,
  CheckCircle,
  XCircle,
  Flag,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  Download,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = {
    totalUsers: 12450,
    totalListings: 3280,
    activeRentals: 156,
    monthlyRevenue: 125000,
    userGrowth: 15.2,
    listingGrowth: 8.7,
    revenueGrowth: 23.1,
  }

  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Renter",
      status: "active",
      joinDate: "2024-01-15",
      totalSpent: 5600,
      kycStatus: "verified",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Sarah Wilson",
      email: "sarah@example.com",
      role: "Lender",
      status: "active",
      joinDate: "2024-01-10",
      totalEarned: 12000,
      kycStatus: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "Mike Chen",
      email: "mike@example.com",
      role: "Both",
      status: "suspended",
      joinDate: "2023-12-20",
      totalSpent: 2300,
      kycStatus: "rejected",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const listings = [
    {
      id: "1",
      title: "Canon EOS R5 Camera",
      lender: "Rajesh Kumar",
      category: "Electronics",
      price: 500,
      status: "active",
      views: 156,
      reports: 0,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "2",
      title: "Suspicious Power Tools",
      lender: "Unknown User",
      category: "Tools",
      price: 50,
      status: "flagged",
      views: 23,
      reports: 3,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "3",
      title: "MacBook Pro 16-inch",
      lender: "Priya Sharma",
      category: "Electronics",
      price: 800,
      status: "under_review",
      views: 89,
      reports: 1,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const reports = [
    {
      id: "1",
      type: "Item Issue",
      reporter: "John Doe",
      reported: "Fake Camera Listing",
      description: "Item received was not as described in the listing",
      status: "investigating",
      date: "2024-01-15",
      severity: "high",
    },
    {
      id: "2",
      type: "User Behavior",
      reporter: "Sarah Wilson",
      reported: "Mike Chen",
      description: "User was rude and unprofessional during pickup",
      status: "resolved",
      date: "2024-01-12",
      severity: "medium",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "suspended":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "flagged":
        return "bg-red-100 text-red-800"
      case "under_review":
        return "bg-orange-100 text-orange-800"
      case "verified":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "investigating":
        return "bg-yellow-100 text-yellow-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
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
              <span className="text-gray-600">Admin Dashboard</span>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="text-sm font-medium">Admin User</span>
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
                  Overview
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Users
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="h-4 w-4 mr-2" />
                  Listings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Reports
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Revenue
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
              <h1 className="text-3xl font-bold mb-2">Platform Control Center</h1>
              <p className="text-blue-100 mb-6">Track users, listings, and platform performance.</p>
              <div className="flex space-x-4">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
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
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Total Users</p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex items-center space-x-1 text-sm">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-green-600">+{stats.userGrowth}%</span>
                    <span className="text-gray-500">this month</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Package className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stats.totalListings.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Total Listings</p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex items-center space-x-1 text-sm">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-green-600">+{stats.listingGrowth}%</span>
                    <span className="text-gray-500">this month</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stats.activeRentals}</p>
                    <p className="text-sm text-gray-600">Active Rentals</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">₹{stats.monthlyRevenue.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Monthly Revenue</p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex items-center space-x-1 text-sm">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-green-600">+{stats.revenueGrowth}%</span>
                    <span className="text-gray-500">this month</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Content Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="users">Users</TabsTrigger>
                    <TabsTrigger value="listings">Listings</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="p-6">
                        <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">New user registered: John Doe</span>
                            <span className="text-xs text-gray-500 ml-auto">2 min ago</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm">New listing added: Camera Equipment</span>
                            <span className="text-xs text-gray-500 ml-auto">5 min ago</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm">Report filed: Suspicious activity</span>
                            <span className="text-xs text-gray-500 ml-auto">10 min ago</span>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-6">
                        <h3 className="font-semibold text-lg mb-4">Platform Health</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">System Status</span>
                            <Badge className="bg-green-100 text-green-800">Operational</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Active Users (24h)</span>
                            <span className="font-medium">2,340</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Server Response</span>
                            <span className="font-medium">120ms</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Uptime</span>
                            <span className="font-medium">99.9%</span>
                          </div>
                        </div>
                      </Card>
                    </div>

                    <Card className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Revenue Chart</h3>
                      <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Revenue chart visualization would go here</p>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="users" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">User Management</h3>
                      <div className="flex space-x-2">
                        <div className="relative">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input placeholder="Search users..." className="pl-10 w-64" />
                        </div>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Users</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="suspended">Suspended</SelectItem>
                            <SelectItem value="pending">Pending KYC</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {users.map((user) => (
                        <Card key={user.id} className="p-4">
                          <div className="flex items-center space-x-4">
                            <Image
                              src={user.avatar || "/placeholder.svg"}
                              alt={user.name}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-semibold">{user.name}</h4>
                                  <p className="text-gray-600">{user.email}</p>
                                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                    <span>Role: {user.role}</span>
                                    <span>Joined: {user.joinDate}</span>
                                    <span>
                                      {user.totalSpent ? `Spent: ₹${user.totalSpent}` : `Earned: ₹${user.totalEarned}`}
                                    </span>
                                  </div>
                                </div>
                                <div className="text-right space-y-2">
                                  <div className="flex space-x-2">
                                    <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                                    <Badge className={getStatusColor(user.kycStatus)}>KYC: {user.kycStatus}</Badge>
                                  </div>
                                </div>
                              </div>
                              <div className="flex space-x-2 mt-4">
                                <Button size="sm" variant="outline">
                                  <Eye className="h-4 w-4 mr-1" />
                                  View Profile
                                </Button>
                                {user.status === "active" ? (
                                  <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                                    <Ban className="h-4 w-4 mr-1" />
                                    Suspend
                                  </Button>
                                ) : (
                                  <Button size="sm" variant="outline" className="text-green-600 bg-transparent">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Activate
                                  </Button>
                                )}
                                {user.kycStatus === "pending" && (
                                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                                    Review KYC
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="listings" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Listing Management</h3>
                      <div className="flex space-x-2">
                        <div className="relative">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input placeholder="Search listings..." className="pl-10 w-64" />
                        </div>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="flagged">Flagged</SelectItem>
                            <SelectItem value="under_review">Under Review</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {listings.map((listing) => (
                        <Card key={listing.id} className="p-4">
                          <div className="flex items-center space-x-4">
                            <Image
                              src={listing.image || "/placeholder.svg"}
                              alt={listing.title}
                              width={60}
                              height={60}
                              className="rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-semibold">{listing.title}</h4>
                                  <p className="text-gray-600">by {listing.lender}</p>
                                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                    <span>{listing.category}</span>
                                    <span>₹{listing.price}/day</span>
                                    <span>{listing.views} views</span>
                                    {listing.reports > 0 && (
                                      <span className="text-red-600">{listing.reports} reports</span>
                                    )}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <Badge className={getStatusColor(listing.status)}>
                                    {listing.status.replace("_", " ")}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex space-x-2 mt-4">
                                <Button size="sm" variant="outline">
                                  <Eye className="h-4 w-4 mr-1" />
                                  View Details
                                </Button>
                                {listing.status === "flagged" && (
                                  <>
                                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                      <CheckCircle className="h-4 w-4 mr-1" />
                                      Approve
                                    </Button>
                                    <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                                      <XCircle className="h-4 w-4 mr-1" />
                                      Remove
                                    </Button>
                                  </>
                                )}
                                {listing.reports > 0 && (
                                  <Button size="sm" variant="outline" className="text-orange-600 bg-transparent">
                                    <Flag className="h-4 w-4 mr-1" />
                                    View Reports
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="reports" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Complaint Reports</h3>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Reports</SelectItem>
                          <SelectItem value="investigating">Investigating</SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                          <SelectItem value="high">High Priority</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      {reports.map((report) => (
                        <Card key={report.id} className="p-4">
                          <div className="space-y-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold">{report.type}</h4>
                                <p className="text-gray-600">
                                  <span className="font-medium">{report.reporter}</span> reported{" "}
                                  <span className="font-medium">{report.reported}</span>
                                </p>
                                <p className="text-sm text-gray-700 mt-2">{report.description}</p>
                                <p className="text-xs text-gray-500 mt-1">Reported on {report.date}</p>
                              </div>
                              <div className="text-right space-y-2">
                                <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                                <Badge className={getSeverityColor(report.severity)}>{report.severity} priority</Badge>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 mr-1" />
                                View Details
                              </Button>
                              {report.status === "investigating" && (
                                <>
                                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Resolve
                                  </Button>
                                  <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                                    <Ban className="h-4 w-4 mr-1" />
                                    Take Action
                                  </Button>
                                </>
                              )}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
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
