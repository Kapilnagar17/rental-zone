"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, Shield, Star, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { number: "10,000+", label: "Active Users", icon: Users },
    { number: "50,000+", label: "Items Listed", icon: TrendingUp },
    { number: "4.8/5", label: "User Rating", icon: Star },
    { number: "₹2M+", label: "Total Rentals", icon: Shield },
  ]

  const team = [
    {
      name: "Kapil Nagar",
      role: "Co-Founder",
      bio: "A passinate creator with a passion for creating sustainable solutions.",
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Mahak Mukhija",
      role: "Co-Founder",
      bio: "A passinate creator with a passion for creating sustainable solutions.",
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Deepak Jangid",
      role: "Co-Founder",
      bio: "A passinate creator with a passion for creating sustainable solutions.",
      avatar: "/placeholder-user.jpg",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in building strong, trusted communities where people help each other.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Every user is verified and every transaction is protected with secure payments.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Promoting circular economy by reducing waste through sharing resources.",
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
              <span className="text-xl font-bold text-blue-900 dark:text-blue-100">About Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Rental Zone</h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            We're on a mission to make access to things easier, more affordable, and more sustainable.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We believe that access is better than ownership. By connecting people who have items with those who need them, 
              we're creating a more sustainable, affordable, and community-driven way of living.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The passionate people behind Rental Zone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of the sharing economy revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/browse">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Browsing
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent hover:scale-105 transition-all duration-300"
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