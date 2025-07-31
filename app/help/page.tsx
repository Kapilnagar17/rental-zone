"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, MessageCircle, Phone, Mail, BookOpen, Video, FileText, Users } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const helpCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      description: "Learn the basics of using Rental Zone",
      articles: [
        "How to create an account",
        "How to list your first item",
        "How to rent an item",
        "Understanding the rental process"
      ]
    },
    {
      title: "Account & Profile",
      icon: Users,
      description: "Manage your account and profile settings",
      articles: [
        "Updating your profile",
        "Verification process",
        "Account security",
        "Payment methods"
      ]
    },
    {
      title: "Renting Items",
      icon: FileText,
      description: "Everything about renting items",
      articles: [
        "How to search for items",
        "Making a booking",
        "Payment and deposits",
        "Pickup and return process"
      ]
    },
    {
      title: "Lending Items",
      icon: Video,
      description: "How to earn by lending your items",
      articles: [
        "Creating effective listings",
        "Setting competitive prices",
        "Managing bookings",
        "Getting paid"
      ]
    }
  ]

  const supportOptions = [
    {
      title: "Live Chat",
      icon: MessageCircle,
      description: "Get instant help from our support team",
      action: "Start Chat",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "Phone Support",
      icon: Phone,
      description: "Call us for immediate assistance",
      action: "Call Now",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "Email Support",
      icon: Mail,
      description: "Send us a detailed message",
      action: "Send Email",
      color: "bg-orange-500 hover:bg-orange-600"
    }
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
              <span className="text-xl font-bold text-blue-900 dark:text-blue-100">Help Center</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Help Center</h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
            Find answers to your questions and get the support you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg bg-white text-gray-900 placeholder-gray-500 border-0 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Browse Help Topics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find the information you need by category
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <Link 
                          href={`/faq#${article.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
                        >
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our support team is here to help you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {option.description}
                  </p>
                  <Button className={`w-full ${option.color} text-white font-semibold`}>
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Popular help topics and resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Common Issues
                </h3>
                <div className="space-y-3">
                  <Link href="/faq" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    • Payment problems
                  </Link>
                  <Link href="/faq" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    • Account verification
                  </Link>
                  <Link href="/faq" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    • Booking cancellations
                  </Link>
                  <Link href="/faq" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    • Item disputes
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Resources
                </h3>
                <div className="space-y-3">
                  <Link href="/how-it-works" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    • How it works
                  </Link>
                  <Link href="/terms" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    • Terms of service
                  </Link>
                  <Link href="/privacy" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    • Privacy policy
                  </Link>
                  <Link href="/contact" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    • Contact us
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't find what you're looking for? Our support team is available 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Support
              </Button>
            </Link>
            <Link href="/faq">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent hover:scale-105 transition-all duration-300"
              >
                View FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 