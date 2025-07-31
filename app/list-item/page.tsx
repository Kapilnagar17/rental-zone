"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, Camera, MapPin, Calendar, DollarSign, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

export default function ListItemPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    dailyRate: "",
    deposit: "",
    location: "",
    images: [] as File[],
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Simple authentication check
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/login")
    }
  }, [user, loading, router])

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

  const categories = [
    "Electronics",
    "Books",
    "Tools",
    "Musical Instruments",
    "Fashion",
    "Travel Gear",
    "Sports Equipment",
    "Home & Garden",
    "Photography",
    "Other",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({
      title: "",
      category: "",
      description: "",
      dailyRate: "",
      deposit: "",
      location: "",
      images: [],
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCategoryChange = (value: string) => {
    setFormData({
      ...formData,
      category: value,
    })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setFormData({
        ...formData,
        images: [...formData.images, ...files],
      })
    }
  }

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    })
  }

  const tips = [
    {
      icon: Camera,
      title: "High-Quality Photos",
      description: "Take clear, well-lit photos from multiple angles to showcase your item.",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Research similar items to set fair and competitive rental rates.",
    },
    {
      icon: MapPin,
      title: "Accurate Location",
      description: "Provide your exact location for easier pickup and delivery arrangements.",
    },
    {
      icon: Calendar,
      title: "Availability",
      description: "Set clear availability dates and be responsive to rental requests.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RZ</span>
              </div>
              <span className="text-xl font-bold text-blue-900 dark:text-blue-100">List Your Item</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">List Your Item</h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            Turn your unused items into income. Start earning by sharing what you have.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Item Details</h2>
              
              {isSubmitted ? (
                <Card className="p-8 border-0 shadow-lg bg-green-50 dark:bg-green-900/20">
                  <CardContent className="p-0 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                      Item Listed Successfully!
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      Your item is now live and ready to be rented. You'll be notified when someone shows interest.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Item Title *
                    </label>
                    <Input
                      id="title"
                      name="title"
                      type="text"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="e.g., Professional DSLR Camera"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category *
                    </label>
                    <Select value={formData.category} onValueChange={handleCategoryChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Description *
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      required
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full min-h-[120px]"
                      placeholder="Describe your item, its condition, and any important details..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="dailyRate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Daily Rate (₹) *
                      </label>
                      <Input
                        id="dailyRate"
                        name="dailyRate"
                        type="number"
                        required
                        value={formData.dailyRate}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="500"
                      />
                    </div>
                    <div>
                      <label htmlFor="deposit" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Deposit (₹) *
                      </label>
                      <Input
                        id="deposit"
                        name="deposit"
                        type="number"
                        required
                        value={formData.deposit}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="2000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Location *
                    </label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="e.g., Andheri West, Mumbai"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Upload Photos *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        PNG, JPG, GIF up to 10MB each
                      </p>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload">
                        <Button variant="outline" className="cursor-pointer">
                          Choose Files
                        </Button>
                      </label>
                    </div>
                    
                    {formData.images.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {formData.images.map((file, index) => (
                          <div key={index} className="relative">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    List Item
                  </Button>
                </form>
              )}
            </div>

            {/* Tips */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tips for Success</h3>
              <div className="space-y-6">
                {tips.map((tip, index) => (
                  <Card key={index} className="p-6 border-0 shadow-lg bg-white dark:bg-gray-800">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <tip.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {tip.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {tip.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Earnings Calculator */}
              <Card className="mt-8 p-6 border-0 shadow-lg bg-blue-50 dark:bg-blue-900/20">
                <CardContent className="p-0">
                  <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                    Potential Earnings
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Daily Rate:</span>
                      <span className="font-semibold">₹500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Monthly Rentals:</span>
                      <span className="font-semibold">8 days</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                          Monthly Income:
                        </span>
                        <span className="text-lg font-bold text-blue-900 dark:text-blue-100">
                          ₹4,000
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Start Earning Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who are already earning passive income
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/browse">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent hover:scale-105 transition-all duration-300"
              >
                Browse Items
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 