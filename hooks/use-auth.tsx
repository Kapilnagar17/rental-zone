"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { 
  User, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth'
import { auth, googleProvider } from '@/lib/firebase'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, displayName: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('Setting up auth state listener...')
    
    // Set persistence to LOCAL for better session management
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        console.log('Persistence set to LOCAL')
      })
      .catch((error) => {
        console.error('Error setting persistence:', error)
      })
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user ? `User logged in: ${user.email}` : 'User logged out')
      setUser(user)
      setLoading(false)
    }, (error) => {
      console.error('Auth state error:', error)
      setLoading(false)
      // Don't clear user on error, let Firebase handle it
    })

    return () => {
      console.log('Cleaning up auth state listener...')
      unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      console.log('Attempting sign in...')
      const result = await signInWithEmailAndPassword(auth, email, password)
      console.log('Sign in successful:', result.user.email)
    } catch (error: any) {
      console.error('Sign in error:', error)
      if (error.code === 'auth/configuration-not-found') {
        throw new Error('Authentication is not configured. Please enable authentication in Firebase Console.')
      }
      throw new Error(error.message)
    }
  }

  const signUp = async (email: string, password: string, displayName: string) => {
    try {
      console.log('Attempting sign up...')
      const result = await createUserWithEmailAndPassword(auth, email, password)
      if (result.user) {
        await updateProfile(result.user, { displayName })
        console.log('Sign up successful:', result.user.email)
      }
    } catch (error: any) {
      console.error('Sign up error:', error)
      if (error.code === 'auth/configuration-not-found') {
        throw new Error('Authentication is not configured. Please enable authentication in Firebase Console.')
      }
      throw new Error(error.message)
    }
  }

  const signInWithGoogle = async () => {
    try {
      console.log('Attempting Google sign in...')
      const result = await signInWithPopup(auth, googleProvider)
      console.log('Google sign in successful:', result.user.email)
    } catch (error: any) {
      console.error('Google sign in error:', error)
      if (error.code === 'auth/configuration-not-found') {
        throw new Error('Google authentication is not configured. Please enable Google sign-in in Firebase Console.')
      }
      throw new Error(error.message)
    }
  }

  const logout = async () => {
    try {
      console.log('Attempting logout...')
      await signOut(auth)
      console.log('Logout successful')
    } catch (error: any) {
      console.error('Logout error:', error)
      throw new Error(error.message)
    }
  }

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    logout,
    resetPassword
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 