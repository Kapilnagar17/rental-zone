"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Grid3X3,
  List,
  MapPin,
  Star,
  Heart,
  Camera,
  BookOpen,
  Wrench,
  Guitar,
  ShoppingBag,
  Tent,
  Calendar,
  ArrowLeft,
  SlidersHorizontal,
  Map,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BrowsePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [favorites, setFavorites] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState("")

  const categories = [
    { id: "all", name: "All Categories", icon: Grid3X3 },
    { id: "electronics", name: "Electronics", icon: Camera },
    { id: "books", name: "Books", icon: BookOpen },
    { id: "tools", name: "Tools", icon: Wrench },
    { id: "music", name: "Musical Instruments", icon: Guitar },
    { id: "fashion", name: "Fashion", icon: ShoppingBag },
    { id: "travel", name: "Travel Gear", icon: Tent },
  ]

  const items = [
    {
      id: "1",
      title: "Canon EOS R5 Professional Camera",
      category: "electronics",
      price: 500,
      rating: 4.8,
      reviews: 24,
      location: "Mumbai, Maharashtra",
      image: "/placeholder.svg?height=200&width=300&text=Camera",
      lender: "Rajesh Kumar",
      lenderRating: 4.9,
      available: true,
      features: ["4K Video", "45MP", "Image Stabilization"],
      distance: "2.5 km",
      verified: true,
    },
    {
      id: "2",
      title: "Bosch Professional Drill Set",
      category: "tools",
      price: 150,
      rating: 4.6,
      reviews: 18,
      location: "Delhi, NCR",
      image: "/placeholder.svg?height=200&width=300&text=Drill",
      lender: "Amit Singh",
      lenderRating: 4.7,
      available: true,
      features: ["18V Battery", "Multiple Bits", "Carrying Case"],
      distance: "1.2 km",
      verified: true,
    },
    {
      id: "3",
      title: "Yamaha Acoustic Guitar FG830",
      category: "music",
      price: 200,
      rating: 4.9,
      reviews: 31,
      location: "Bangalore, Karnataka",
      image: "/placeholder.svg?height=200&width=300&text=Guitar",
      lender: "Priya Sharma",
      lenderRating: 5.0,
      available: false,
      features: ["Solid Spruce Top", "Rosewood Back", "Includes Case"],
      distance: "5.1 km",
      verified: true,
    },
    {
      id: "4",
      title: "MacBook Pro 16-inch M2",
      category: "electronics",
      price: 800,
      rating: 4.7,
      reviews: 12,
      location: "Pune, Maharashtra",
      image: "/placeholder.svg?height=200&width=300&text=MacBook",
      lender: "Arjun Patel",
      lenderRating: 4.8,
      available: true,
      features: ["M2 Chip", "16GB RAM", "512GB SSD"],
      distance: "3.8 km",
      verified: true,
    },
    {
      id: "5",
      title: "Complete Camping Gear Set",
      category: "travel",
      price: 300,
      rating: 4.5,
      reviews: 8,
      location: "Goa",
      image: "/placeholder.svg?height=200&width=300&text=Camping",
      lender: "Neha Gupta",
      lenderRating: 4.6,
      available: true,
      features: ["4-Person Tent", "Sleeping Bags", "Cooking Kit"],
      distance: "7.2 km",
      verified: false,
    },
    {
      id: "6",
      title: "Designer Wedding Lehenga",
      category: "fashion",
      price: 400,
      rating: 4.8,
      reviews: 15,
      location: "Jaipur, Rajasthan",
      image: "/placeholder.svg?height=200&width=300&text=Lehenga",
      lender: "Kavya Agarwal",
      lenderRating: 4.9,
      available: true,
      features: ["Size M", "Heavy Embroidery", "Matching Jewelry"],
      distance: "4.5 km",
      verified: true,
    },
  ]

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1]
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.lender.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = !selectedLocation || item.location.toLowerCase().includes(selectedLocation.toLowerCase())
    return matchesCategory && matchesPrice && matchesSearch && matchesLocation
  })

  const toggleFavorite = (itemId: string) => {
    setFavorites((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <ArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:-translate-x-1 transition-transform" />
              <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">RZ</span>
              </div>
              <span className="text-2xl font-bold text-blue-900 dark:text-blue-100">Rental Zone</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-blue-900 dark:text-blue-100 font-medium">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card className="p-6 sticky top-24 bg-white dark:bg-gray-800 border-0 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg flex items-center text-gray-900 dark:text-white">
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filters
                </h3>
                <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setShowFilters(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Search */}
              <div className="space-y-2 mb-6">
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Search Items</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search for items..."
                    className="pl-10 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="space-y-2 mb-6">
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        <div className="flex items-center space-x-2">
                          <category.icon className="h-4 w-4" />
                          <span>{category.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-2 mb-6">
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Price Range (₹/day)</Label>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    min={0}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2 mb-6">
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Enter city or pincode"
                    className="pl-10 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  />
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-2 mb-6">
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Availability</Label>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <Input
                    type="date"
                    className="flex-1 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                className="w-full mt-6 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 bg-transparent"
                onClick={() => {
                  setSelectedCategory("all")
                  setPriceRange([0, 1000])
                  setSearchQuery("")
                  setSelectedLocation("")
                }}
              >
                Clear All Filters
              </Button>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Browse Items</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{filteredItems.length} items available near you</p>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden border-gray-200 dark:border-gray-600 bg-transparent"
                  onClick={() => setShowFilters(true)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>

                <Select defaultValue="relevance">
                  <SelectTrigger className="w-48 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="distance">Nearest First</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg bg-white dark:bg-gray-800">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                <Button variant="outline" size="sm" className="border-gray-200 dark:border-gray-600 bg-transparent">
                  <Map className="h-4 w-4 mr-2" />
                  Map View
                </Button>
              </div>
            </div>

            {/* Items Grid/List */}
            <div className={viewMode === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favorites.includes(item.id) ? "text-red-500 fill-current" : "text-gray-600 dark:text-gray-300"
                        }`}
                      />
                    </button>
                    {!item.available && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary" className="bg-white text-gray-900 font-medium">
                          Not Available
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 flex space-x-2">
                      <Badge className="bg-blue-900/90 text-white backdrop-blur">{item.distance} away</Badge>
                      {item.verified && <Badge className="bg-green-500/90 text-white backdrop-blur">Verified</Badge>}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-blue-900 dark:group-hover:text-blue-300 transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <MapPin className="h-3 w-3" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{item.rating}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">({item.reviews})</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {item.features.slice(0, 2).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700">
                            {feature}
                          </Badge>
                        ))}
                        {item.features.length > 2 && (
                          <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700">
                            +{item.features.length - 2} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-blue-900 dark:text-blue-300">₹{item.price}</span>
                          <span className="text-gray-600 dark:text-gray-400">/day</span>
                        </div>
                        <Link href={`/item/${item.id}`}>
                          <Button
                            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            disabled={!item.available}
                          >
                            {item.available ? "View Details" : "Unavailable"}
                          </Button>
                        </Link>
                      </div>

                      <div className="flex items-center space-x-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 rounded-full flex items-center justify-center">
                          <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">
                            {item.lender
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{item.lender}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-600 dark:text-gray-400">{item.lenderRating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">No items found</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                  Try adjusting your filters or search terms to find what you're looking for
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory("all")
                    setPriceRange([0, 1000])
                    setSearchQuery("")
                    setSelectedLocation("")
                  }}
                  className="bg-blue-900 hover:bg-blue-800 text-white font-medium px-8"
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredItems.length > 0 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium px-8 bg-transparent"
                >
                  Load More Items
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
