"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, MapPin, Star, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RenterFavoritesPage() {
  const favorites = [
    {
      id: "1",
      title: "Professional DSLR Camera",
      price: 400,
      location: "Mumbai",
      rating: 4.8,
      image: "/placeholder.svg?height=120&width=160",
      lender: "Rajesh Kumar",
    },
    {
      id: "2",
      title: "Gaming Laptop",
      price: 800,
      location: "Bangalore",
      rating: 4.9,
      image: "/placeholder.svg?height=120&width=160",
      lender: "Priya Sharma",
    },
    {
      id: "3",
      title: "Acoustic Guitar",
      price: 200,
      location: "Delhi",
      rating: 4.7,
      image: "/placeholder.svg?height=120&width=160",
      lender: "Amit Singh",
    },
    {
      id: "4",
      title: "Power Drill Set",
      price: 150,
      location: "Pune",
      rating: 4.6,
      image: "/placeholder.svg?height=120&width=160",
      lender: "Neha Gupta",
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
              <span className="text-gray-600">My Favorites</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Favorites</h1>
          <p className="text-gray-600">Items you've saved for later</p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4 text-red-500 fill-current" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 mb-3">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">by {item.lender}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-900">₹{item.price}/day</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Rent Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Favorites Yet</h3>
            <p className="text-gray-600 mb-6">Start browsing items and add them to your favorites</p>
            <Link href="/browse">
              <Button className="bg-blue-900 hover:bg-blue-800">
                Browse Items
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
} 