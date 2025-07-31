"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Camera,
  BookOpen,
  Wrench,
  Guitar,
  ShoppingBag,
  Tent,
  Star,
  Shield,
  Users,
  Recycle,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  MapPin,
  CreditCard,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const categories = [
    {
      icon: Camera,
      name: "Electronics",
      count: "500+ items",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      icon: BookOpen,
      name: "Books",
      count: "300+ items",
      color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
    },
    {
      icon: Wrench,
      name: "Tools",
      count: "200+ items",
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300",
    },
    {
      icon: Guitar,
      name: "Musical Instruments",
      count: "150+ items",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
    },
    {
      icon: ShoppingBag,
      name: "Fashion",
      count: "400+ items",
      color: "bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300",
    },
    {
      icon: Tent,
      name: "Travel Gear",
      count: "100+ items",
      color: "bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300",
    },
  ]

  const howItWorks = [
    { step: "1", title: "Sign Up", description: "Create your account in seconds", icon: Users },
    { step: "2", title: "Browse or Upload", description: "Find items or list your own", icon: Camera },
    { step: "3", title: "Book & Pay", description: "Secure payment with deposit", icon: CreditCard },
    { step: "4", title: "Pickup/Delivery", description: "Meet or get it delivered", icon: MapPin },
    { step: "5", title: "Return & Review", description: "Return and rate your experience", icon: Star },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Photography Enthusiast",
      content: "Rented a professional camera for my wedding shoot. Saved ₹15,000 compared to buying!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=SJ",
    },
    {
      name: "Mike Chen",
      role: "DIY Homeowner",
      content: "Found all the tools I needed for my kitchen renovation. The lenders were super helpful!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=MC",
    },
    {
      name: "Priya Sharma",
      role: "Music Teacher",
      content: "Earning ₹5,000/month by renting out my spare instruments. Great passive income!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=PS",
    },
  ]

  const valueProps = [
    {
      icon: CheckCircle,
      title: "Save Money",
      description: "Pay only for what you use, when you use it",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Protected transactions with refundable deposits",
    },
    {
      icon: Users,
      title: "Verified Users",
      description: "KYC verified users with transparent ratings",
    },
    {
      icon: Recycle,
      title: "Sustainability",
      description: "Reduce waste by sharing resources",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])



  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Don't Buy It. <span className="text-orange-400 animate-pulse">Rent It.</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Access gadgets, books, tools, and more from people near you — and earn by renting what you don't use.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/browse">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Browse Items
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/list-item">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent hover:scale-105"
                  >
                    List Your Item
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Verified Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-green-400" />
                  <span>Rated 4.8/5</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4 animate-float">
                <div className="space-y-4">
                  <Card className="p-4 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <Camera className="h-8 w-8 text-orange-400 mb-2" />
                    <p className="text-sm font-medium">Professional Camera</p>
                    <p className="text-xs text-blue-200">₹500/day</p>
                  </Card>
                  <Card className="p-4 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <Guitar className="h-8 w-8 text-orange-400 mb-2" />
                    <p className="text-sm font-medium">Acoustic Guitar</p>
                    <p className="text-xs text-blue-200">₹200/day</p>
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <Card className="p-4 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <Wrench className="h-8 w-8 text-orange-400 mb-2" />
                    <p className="text-sm font-medium">Power Drill Set</p>
                    <p className="text-xs text-blue-200">₹150/day</p>
                  </Card>
                  <Card className="p-4 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <BookOpen className="h-8 w-8 text-orange-400 mb-2" />
                    <p className="text-sm font-medium">Technical Books</p>
                    <p className="text-xs text-blue-200">₹50/day</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Get started in 5 simple steps</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-600 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Top Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Discover what you can rent</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white dark:bg-gray-800"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{category.count}</p>
                  <Button
                    variant="ghost"
                    className="text-blue-900 dark:text-blue-300 group-hover:text-orange-500 font-medium"
                  >
                    Explore <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rental Zone */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Rental Zone?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">The smart way to access what you need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-white dark:bg-gray-800 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <prop.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{prop.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{prop.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Real experiences from our community</p>
          </div>

          <Card className="p-8 lg:p-12 shadow-xl border-0 bg-white dark:bg-gray-800">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-900 dark:text-white mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? "bg-blue-900 dark:bg-blue-300" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Renting?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of users who are saving money and earning income</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/browse">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Browsing
              </Button>
            </Link>
            <Link href="/list-item">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent hover:scale-105 transition-all duration-300"
              >
                List Your First Item
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RZ</span>
                </div>
                <span className="text-2xl font-bold">Rental Zone</span>
              </div>
              <p className="text-gray-400 leading-relaxed">The smart way to access what you need, when you need it.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>📷
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>💼
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>🐦
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/browse" className="block text-gray-400 hover:text-white transition-colors">
                  Browse Items
                </Link>
                <Link href="/how-it-works" className="block text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Support</h3>
              <div className="space-y-3">
                <Link href="/faq" className="block text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
                <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/help" className="block text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with new features and items</p>
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 font-medium">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Rental Zone. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
