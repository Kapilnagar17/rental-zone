"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ChevronDown, ChevronUp, HelpCircle, Shield, CreditCard, Users, Star } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqCategories = [
    {
      title: "Getting Started",
      icon: HelpCircle,
      questions: [
        {
          question: "How do I create an account?",
          answer: "Creating an account is simple! Click the 'Sign Up' button on our homepage, fill in your details, verify your email, and you're ready to start renting or lending items."
        },
        {
          question: "Is it free to join Rental Zone?",
          answer: "Yes, joining Rental Zone is completely free! You only pay when you rent items or earn money when you lend your items."
        },
        {
          question: "What information do I need to provide?",
          answer: "We require basic information like your name, email, phone number, and address. For security, we also verify your identity through our KYC process."
        }
      ]
    },
    {
      title: "Renting Items",
      icon: CreditCard,
      questions: [
        {
          question: "How do I rent an item?",
          answer: "Browse items, select your desired dates, pay the rental fee and deposit, then arrange pickup or delivery with the lender."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, UPI, and digital wallets like Paytm, Google Pay, and PhonePe."
        },
        {
          question: "How does the deposit work?",
          answer: "A refundable deposit is held during the rental period and returned within 24-48 hours after the item is returned in good condition."
        },
        {
          question: "Can I cancel a booking?",
          answer: "Yes, you can cancel bookings up to 24 hours before the rental period starts without any penalty."
        }
      ]
    },
    {
      title: "Lending Items",
      icon: Users,
      questions: [
        {
          question: "How do I list an item for rent?",
          answer: "Click 'List Your Item', fill in the details, upload photos, set your price, and publish. It's that simple!"
        },
        {
          question: "How much can I earn?",
          answer: "Earnings depend on your item's value and demand. Most users earn ₹2,000-₹10,000 per month per item."
        },
        {
          question: "What if my item gets damaged?",
          answer: "All items are covered by our insurance during rental periods. Damages are assessed and covered according to our terms."
        },
        {
          question: "How do I get paid?",
          answer: "Payments are processed automatically and transferred to your account within 24-48 hours after the rental period ends."
        }
      ]
    },
    {
      title: "Safety & Security",
      icon: Shield,
      questions: [
        {
          question: "How do you verify users?",
          answer: "All users go through KYC verification including ID proof, address verification, and phone number verification."
        },
        {
          question: "What if there's a dispute?",
          answer: "We have a dedicated support team to handle disputes. Most issues are resolved within 24-48 hours."
        },
        {
          question: "Is my personal information safe?",
          answer: "Yes, we use bank-level encryption and never share your personal information with other users."
        },
        {
          question: "What insurance coverage do you provide?",
          answer: "All items are covered by comprehensive insurance during rental periods, protecting both lenders and renters."
        }
      ]
    },
    {
      title: "Reviews & Ratings",
      icon: Star,
      questions: [
        {
          question: "How does the rating system work?",
          answer: "After each rental, both parties can rate and review each other. This helps maintain trust and quality in our community."
        },
        {
          question: "Can I see reviews before renting?",
          answer: "Yes, you can see the lender's rating and read reviews from previous renters before making a booking."
        },
        {
          question: "What if I get a bad review?",
          answer: "We encourage constructive feedback. If you receive an unfair review, you can contact our support team for assistance."
        }
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
              <span className="text-xl font-bold text-blue-900 dark:text-blue-100">FAQ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            Find answers to common questions about Rental Zone
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemIndex = categoryIndex * 100 + faqIndex
                    const isOpen = openItems.includes(itemIndex)
                    
                    return (
                      <Card key={faqIndex} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(itemIndex)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Support
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-900 text-blue-900 dark:text-blue-100 hover:bg-blue-900 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 