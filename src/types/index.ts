import type { ReactNode } from "react"

export interface Service {
  icon: string
  title: string
  price: string
  description: string
}

export interface BeforeAfter {
  title: string
  description: string
  duration: string
  guarantee: string
  imageUrl?: string
  imageAfterUrl?: string
}

export interface Review {
  name: string
  car: string
  text: string
  rating: number
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  variant?: 'hero' | 'services' | 'before-after' | 'prices' | 'reviews' | 'contact' | 'default'
  services?: Service[]
  works?: BeforeAfter[]
  reviews?: Review[]
}

export interface SectionProps extends Section {
  isActive: boolean
}