"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, Camera, CreditCard, MapPin, Star, Shield, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      step: "1",
      title: "Sign Up",
      description: "Create your account in seconds with email verification",
      icon: Users,
      details: [
        "Quick registration with email and phone",
        "KYC verification for security",
        "Profile setup with preferences",
      ],
    },
    {
      step: "2",
      title: "Browse or Upload",
      description: "Find items you need or list your own for rent",
      icon: Camera,
      details: [
        "Search by category, location, or price",
        "Upload photos and descriptions",
        "Set your rental rates and availability",
      ],
    },
    {
      step: "3",
      title: "Book & Pay",
      description: "Secure payment with refundable deposit",
      icon: CreditCard,
      details: [
        "Choose rental dates and duration",
        "Pay securely with multiple options",
        "Deposit held until return",
      ],
    },
    {
      step: "4",
      title: "Pickup/Delivery",
      description: "Meet in person or arrange delivery",
      icon: MapPin,
      details: [
        "Agree on pickup/delivery location",
        "Verify item condition together",
        "Document any existing damage",
      ],
    },
    {
      step: "5",
      title: "Return & Review",
      description: "Return items and rate your experience",
      icon: Star,
      details: [
        "Return items in same condition",
        "Rate and review the experience",
        "Get deposit refunded",
      ],
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "All transactions are protected with secure payment processing and deposit system.",
    },
    {
      icon: Users,
      title: "Verified Users",
      description: "Every user goes through KYC verification to ensure trust and safety.",
    },
    {
      icon: Star,
      title: "Rating System",
      description: "Rate and review system helps maintain quality and trust in the community.",
    },
    {
      icon: CheckCircle,
      title: "Insurance Coverage",
      description: "Items are covered by insurance during the rental period for peace of mind.",
    },
  ]

  const faqs = [
    {
      question: "How much does it cost to list an item?",
      answer: "Listing items is completely free! You only pay a small commission when your item is rented.",
    },
    {
      question: "What happens if an item gets damaged?",
      answer: "We have a comprehensive insurance system. Damages are assessed and covered according to our terms.",
    },
    {
      question: "How do I get paid for my rentals?",
      answer: "Payments are processed automatically and transferred to your account within 24-48 hours after the rental period ends.",
    },
    {
      question: "Can I cancel a booking?",
      answer: "Yes, you can cancel bookings up to 24 hours before the rental period starts without any penalty.",
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
              <span className="text-xl font-bold text-blue-900 dark:text-blue-100">How It Works</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">How Rental Zone Works</h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            Get started in 5 simple steps. Whether you're renting or lending, we make it easy and secure.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center mb-6">
                        <step.icon className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                      <CardContent className="p-0">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                            <step.icon className="h-16 w-16 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Step {step.step}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {step.title}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-gray-300 dark:text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Rental Zone?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Built with trust and security in mind</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Common questions about our platform</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who are already saving money and earning income
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
    </div>
  )
} 