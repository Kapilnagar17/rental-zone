"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal information (name, email, phone number, address)",
        "Identity verification documents",
        "Payment information",
        "Usage data and preferences",
        "Communication records",
        "Device and browser information"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        "To provide and maintain our rental platform",
        "To process payments and transactions",
        "To verify user identity and prevent fraud",
        "To communicate with you about your account",
        "To improve our services and user experience",
        "To comply with legal obligations"
      ]
    },
    {
      title: "Information Sharing",
      icon: Lock,
      content: [
        "We do not sell your personal information",
        "We may share information with other users only with your consent",
        "We share data with payment processors for transactions",
        "We may share information if required by law",
        "We use trusted third-party services for platform operations"
      ]
    },
    {
      title: "Data Security",
      icon: Shield,
      content: [
        "We use bank-level encryption to protect your data",
        "All sensitive information is encrypted in transit and at rest",
        "We regularly audit our security measures",
        "We limit access to personal information to authorized personnel",
        "We have incident response procedures in place"
      ]
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
              <span className="text-xl font-bold text-blue-900 dark:text-blue-100">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            How we protect and handle your personal information
          </p>
          <p className="text-blue-200 mt-4">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              At Rental Zone, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              and protect your personal information when you use our platform.
            </p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300">
                You have the right to:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate information</li>
                <li>• Request deletion of your data</li>
                <li>• Opt out of marketing communications</li>
                <li>• Export your data</li>
              </ul>
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> privacy@rentalzone.com<br />
                  <strong>Address:</strong> Rental Zone, Mumbai, Maharashtra, India<br />
                  <strong>Phone:</strong> +91 98765 43210
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We're here to help with any privacy concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/terms">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-900 text-blue-900 dark:text-blue-100 hover:bg-blue-900 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Terms of Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 