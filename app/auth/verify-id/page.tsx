"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { db, storage } from "@/lib/firebase"
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Upload, CheckCircle, AlertCircle } from "lucide-react"

const ID_TYPES = [
  "Aadhaar Card",
  "PAN Card",
  "Voter ID",
  "Driving License",
  "Passport"
]

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export default function VerifyIdPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [idType, setIdType] = useState("")
  const [idNumber, setIdNumber] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    // Validate file size
    if (selectedFile.size > MAX_FILE_SIZE) {
      setError("File size must be less than 5MB")
      setFile(null)
      return
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'application/pdf']
    if (!validTypes.includes(selectedFile.type)) {
      setError("Please upload a valid image (JPEG, PNG, WebP) or PDF file")
      setFile(null)
      return
    }

    setError("")
    setFile(selectedFile)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!idType || !idNumber || !file) {
      setError("Please fill all fields and upload your ID.")
      return
    }

    if (!user) {
      setError("You must be logged in.")
      return
    }

    setIsLoading(true)

    try {
      // Create a unique filename
      const timestamp = Date.now()
      const fileExtension = file.name.split('.').pop()
      const fileName = `government_id_${timestamp}.${fileExtension}`
      
      // Upload file to Firebase Storage
      const storageRef = ref(storage, `users/${user.uid}/governmentId/${fileName}`)
      
      // Upload the file
      await uploadBytes(storageRef, file)
      
      // Get download URL
      const fileUrl = await getDownloadURL(storageRef)

      // Store metadata in Firestore
      await setDoc(doc(db, "users", user.uid, "governmentId", "info"), {
        idType,
        idNumber,
        fileUrl,
        fileName,
        uploadedAt: new Date().toISOString()
      })

      setSuccess(true)
      
      // Redirect to home page after success
      setTimeout(() => {
        router.replace("/")
      }, 1500)

    } catch (err: any) {
      console.error("Upload error:", err)
      
      // Handle specific Firebase errors
      if (err.code === 'storage/unauthorized') {
        setError("Upload failed: Unauthorized. Please try again.")
      } else if (err.code === 'storage/quota-exceeded') {
        setError("Upload failed: Storage quota exceeded.")
      } else if (err.code === 'storage/network-request-failed') {
        setError("Upload failed: Network error. Please check your connection and try again.")
      } else {
        setError("Upload failed. Please try again with a smaller file or different format.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Verify Your Government ID</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="idType">Select ID Type</Label>
                <select
                  id="idType"
                  className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
                  value={idType}
                  onChange={e => setIdType(e.target.value)}
                  required
                  disabled={isLoading}
                >
                  <option value="">-- Select --</option>
                  {ID_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="idNumber">ID Number</Label>
                <Input
                  id="idNumber"
                  value={idNumber}
                  onChange={e => setIdNumber(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <Label htmlFor="file">Upload ID (Image or PDF)</Label>
                <div className="mt-1">
                  <Input
                    id="file"
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                    required
                    disabled={isLoading}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Max file size: 5MB. Supported formats: JPEG, PNG, WebP, PDF
                  </p>
                </div>
                {file && (
                  <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-700 dark:text-green-300">
                        File selected: {file.name}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Bar - Removed */}
              
              {/* Error Message */}
              {error && (
                <div className="flex items-center space-x-2 p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <span className="text-sm text-red-700 dark:text-red-300">{error}</span>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-700 dark:text-green-300">
                    ID uploaded successfully! Redirecting...
                  </span>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading ID...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Submit ID
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}