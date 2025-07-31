"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, FileText, Shield, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: "By accessing and using Rental Zone, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "User Responsibilities",
      icon: Shield,
      content: "Users are responsible for providing accurate information, maintaining the security of their accounts, and ensuring that items are in good condition when listed or rented. Users must comply with all applicable laws and regulations."
    },
    {
      title: "Prohibited Activities",
      icon: AlertTriangle,
      content: "Users may not list illegal items, engage in fraudulent activities, violate intellectual property rights, or use the platform for any unlawful purpose. We reserve the right to terminate accounts that violate these terms."
    },
    {
      title: "Payment and Fees",
      icon: FileText,
      content: "Rental fees and deposits are processed through secure payment gateways. We charge a small commission on successful rentals. All fees are clearly displayed before booking."
    }
  ]

  const userAgreements = [
    "I am at least 18 years old and legally capable of entering into agreements",
    "I will provide accurate and truthful information",
    "I will maintain the security of my account credentials",
    "I will not use the platform for illegal activities",
    "I will respect other users' rights and property",
    "I will comply with all applicable laws and regulations"
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
              <span className="text-xl font-bold text-blue-900 dark:text-blue-100">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            The rules and guidelines for using Rental Zone
          </p>
          <p className="text-blue-200 mt-4">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              These Terms of Service govern your use of Rental Zone and the services we provide. 
              Please read them carefully before using our platform.
            </p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Agreement</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                By using Rental Zone, you agree to the following:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <ul className="space-y-3">
                  {userAgreements.map((agreement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{agreement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Rental Zone acts as a platform connecting lenders and renters. We are not responsible for:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                <li>• The condition or quality of items listed on our platform</li>
                <li>• Disputes between users</li>
                <li>• Loss or damage of items during rental periods</li>
                <li>• Actions or conduct of users</li>
                <li>• Third-party services or websites</li>
              </ul>
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to modify these terms at any time. We will notify users of significant changes 
                via email or through our platform. Continued use of the service after changes constitutes acceptance 
                of the new terms.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> legal@rentalzone.com<br />
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
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We're here to clarify any questions about our terms of service.
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
            <Link href="/privacy">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-900 text-blue-900 dark:text-blue-100 hover:bg-blue-900 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 