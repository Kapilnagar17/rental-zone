"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Star,
  MapPin,
  Shield,
  MessageCircle,
  Heart,
  Share2,
  Clock,
  CheckCircle,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ItemDetailPage({ params }: { params: { id: string } }) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [rentalDuration, setRentalDuration] = useState(1)

  // Mock item data
  const item = {
    id: params.id,
    title: "Canon EOS R5 Professional Camera",
    category: "Electronics",
    price: 500,
    weeklyPrice: 3000,
    rating: 4.8,
    reviews: 24,
    location: "Mumbai, Maharashtra",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "Professional-grade mirrorless camera perfect for photography enthusiasts and professionals. Features 45MP full-frame sensor, 8K video recording, and advanced image stabilization. Ideal for weddings, events, portraits, and commercial photography.",
    features: [
      "45MP Full-Frame CMOS Sensor",
      "8K RAW Video Recording",
      "In-Body Image Stabilization",
      "Dual Pixel CMOS AF II",
      "Weather Sealed Body",
      "4K 120fps Video",
    ],
    included: ["Camera Body", "24-70mm f/2.8 Lens", "2x Batteries", "Charger", "Memory Card (64GB)", "Camera Bag"],
    lender: {
      name: "Rajesh Kumar",
      rating: 4.9,
      reviews: 156,
      joinedDate: "2022",
      responseTime: "Within 2 hours",
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
    },
    policies: {
      cancellation: "Free cancellation up to 24 hours before pickup",
      damage: "Security deposit of ₹10,000 required",
      late: "₹100 per hour for late returns",
    },
    availability: {
      unavailableDates: [new Date(2024, 11, 15), new Date(2024, 11, 16), new Date(2024, 11, 20)],
    },
  }

  const reviews = [
    {
      id: 1,
      user: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Excellent camera! Rajesh was very helpful and the equipment was in perfect condition. Highly recommended for professional shoots.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      user: "Amit Singh",
      rating: 5,
      date: "1 month ago",
      comment:
        "Great experience! The camera quality is outstanding and pickup/return was smooth. Will definitely rent again.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      user: "Neha Gupta",
      rating: 4,
      date: "2 months ago",
      comment:
        "Good camera for the price. Minor wear but doesn't affect performance. Lender was responsive and professional.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length)
  }

  const calculateTotal = () => {
    const dailyRate = item.price
    const weeklyRate = item.weeklyPrice
    const securityDeposit = 10000

    if (rentalDuration >= 7) {
      const weeks = Math.floor(rentalDuration / 7)
      const remainingDays = rentalDuration % 7
      return weeks * weeklyRate + remainingDays * dailyRate + securityDeposit
    }
    return rentalDuration * dailyRate + securityDeposit
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/browse" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600">Back to Browse</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setIsFavorite(!isFavorite)}>
                <Heart className={`h-4 w-4 ${isFavorite ? "text-red-500 fill-current" : "text-gray-600"}`} />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src={item.images[currentImageIndex] || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {item.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-2">
                  {item.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative rounded-lg overflow-hidden ${
                        index === currentImageIndex ? "ring-2 ring-blue-500" : ""
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${item.title} ${index + 1}`}
                        width={150}
                        height={100}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Item Details */}
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{item.rating}</span>
                      <span className="text-gray-500">({item.reviews} reviews)</span>
                    </div>
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{item.title}</h1>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {item.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">What's Included</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {item.included.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Policies</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{item.policies.cancellation}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Shield className="h-4 w-4 text-blue-500 mt-0.5" />
                      <span className="text-gray-700">{item.policies.damage}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">{item.policies.late}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Reviews */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Reviews ({item.reviews})</h3>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-start space-x-3">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.user}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-900">{review.user}</span>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Booking Card */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="p-6 sticky top-24">
              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-blue-900">₹{item.price}</span>
                    <span className="text-gray-600">/day</span>
                  </div>
                  <p className="text-sm text-gray-600">₹{item.weeklyPrice}/week (Save 14%)</p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Select Rental Duration</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 3, 7].map((days) => (
                      <Button
                        key={days}
                        variant={rentalDuration === days ? "default" : "outline"}
                        size="sm"
                        onClick={() => setRentalDuration(days)}
                      >
                        {days} day{days > 1 ? "s" : ""}
                      </Button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <label className="text-sm text-gray-600">Custom duration (days):</label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={rentalDuration}
                      onChange={(e) => setRentalDuration(Number.parseInt(e.target.value) || 1)}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Select Pickup Date</h4>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) =>
                      date < new Date() ||
                      item.availability.unavailableDates.some(
                        (unavailable) => date.toDateString() === unavailable.toDateString(),
                      )
                    }
                    className="rounded-md border"
                  />
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Rental ({rentalDuration} days)</span>
                    <span>
                      ₹
                      {rentalDuration >= 7
                        ? Math.floor(rentalDuration / 7) * item.weeklyPrice + (rentalDuration % 7) * item.price
                        : rentalDuration * item.price}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Deposit</span>
                    <span>₹10,000</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{calculateTotal().toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-500">*Security deposit will be refunded after return</p>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3" disabled={!selectedDate}>
                  {selectedDate ? "Rent Now" : "Select Date to Continue"}
                </Button>

                <Button variant="outline" className="w-full bg-transparent">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat with Lender
                </Button>
              </div>
            </Card>

            {/* Lender Info */}
            <Card className="p-6">
              <h4 className="font-medium mb-4">About the Lender</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={item.lender.avatar || "/placeholder.svg"}
                    alt={item.lender.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{item.lender.name}</span>
                      {item.lender.verified && <CheckCircle className="h-4 w-4 text-green-500" />}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm">
                        {item.lender.rating} ({item.lender.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Member since</span>
                    <p className="font-medium">{item.lender.joinedDate}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Response time</span>
                    <p className="font-medium">{item.lender.responseTime}</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  <User className="h-4 w-4 mr-2" />
                  View Profile
                </Button>
              </div>
            </Card>

            {/* Safety Notice */}
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-start space-x-2">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h5 className="font-medium text-blue-900 mb-1">Safety First</h5>
                  <p className="text-sm text-blue-700">
                    All transactions are protected. Meet in public places and inspect items before payment.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
