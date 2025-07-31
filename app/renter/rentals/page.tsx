"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Package, Calendar, MapPin, MessageCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RenterRentalsPage() {
  const [activeTab, setActiveTab] = useState("active")

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
              <Link href="/renter/dashboard" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Dashboard</span>
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">My Rentals</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Rentals</h1>
          <p className="text-gray-600">Track and manage all your rental activities</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Rental History</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="active">Active Rentals</TabsTrigger>
                <TabsTrigger value="past">Past Rentals</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-4">
                {activeRentals.length > 0 ? (
                  activeRentals.map((rental) => (
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
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Active Rentals</h3>
                    <p className="text-gray-600 mb-4">You don't have any active rentals at the moment.</p>
                    <Link href="/browse">
                      <Button className="bg-blue-900 hover:bg-blue-800">
                        Browse Items
                      </Button>
                    </Link>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past" className="space-y-4">
                {pastRentals.length > 0 ? (
                  pastRentals.map((rental) => (
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
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Past Rentals</h3>
                    <p className="text-gray-600 mb-4">You haven't completed any rentals yet.</p>
                    <Link href="/browse">
                      <Button className="bg-blue-900 hover:bg-blue-800">
                        Start Renting
                      </Button>
                    </Link>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 