"use client"

import { useAuth } from "@/hooks/use-auth"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Loader2, Shield, AlertCircle } from "lucide-react"
import { db } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface IdVerificationGuardProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

// Routes that require government ID verification
const ID_REQUIRED_ROUTES = [
  '/renter/dashboard',
  '/lender/dashboard', 
  '/admin/dashboard',
  '/renter/favorites',
  '/renter/messages',
  '/renter/payments',
  '/renter/profile',
  '/renter/rentals',
  '/renter/settings',
  '/list-item'
]

export default function IdVerificationGuard({ children, fallback }: IdVerificationGuardProps) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [idLoading, setIdLoading] = useState(true)
  const [hasGovId, setHasGovId] = useState<boolean | null>(null)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (!loading && user && !checked) {
      // Check if user has uploaded government ID
      const checkGovId = async () => {
        setIdLoading(true)
        try {
          const docRef = doc(db, "users", user.uid, "governmentId", "info")
          const docSnap = await getDoc(docRef)
          setHasGovId(docSnap.exists())
          setChecked(true)
        } catch (error) {
          console.error("Error checking government ID:", error)
          setHasGovId(false)
          setChecked(true)
        } finally {
          setIdLoading(false)
        }
      }
      checkGovId()
    } else if (!user) {
      setHasGovId(null)
      setChecked(false)
      setIdLoading(false)
    }
  }, [user, loading, checked])

  useEffect(() => {
    if (!loading && !idLoading && user && hasGovId === false && checked) {
      // Only redirect to verify-id if the current route requires ID verification
      if (ID_REQUIRED_ROUTES.includes(pathname)) {
        router.replace("/auth/verify-id")
      }
    }
  }, [loading, idLoading, user, hasGovId, router, pathname, checked])

  if (loading || idLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  if (!user) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Authentication Required</h2>
          <p className="text-gray-600">Please log in to access this page.</p>
        </div>
      </div>
    )
  }

  if (hasGovId === false && ID_REQUIRED_ROUTES.includes(pathname) && checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
        <Card className="w-full max-w-md shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <CardTitle className="text-2xl font-bold">ID Verification Required</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-orange-600 dark:text-orange-400">
              <AlertCircle className="h-5 w-5" />
              <span className="font-medium">Government ID Required</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To access this feature, you need to verify your identity by uploading a government ID.
            </p>
            <Button 
              onClick={() => router.push("/auth/verify-id")}
              className="w-full bg-orange-500 hover:bg-orange-600"
            >
              Upload Government ID
            </Button>
            <Button 
              variant="outline" 
              onClick={() => router.push("/")}
              className="w-full"
            >
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
} 