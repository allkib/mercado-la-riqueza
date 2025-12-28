'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { brandConfig } from '@/config/brand'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with {brandConfig.name}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandConfig.colors.primary }}>
              Store Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
                <a
                  href={brandConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  <p>
                    {brandConfig.contact.address}<br />
                    {brandConfig.contact.city}, {brandConfig.contact.state} {brandConfig.contact.zipCode}
                  </p>
                  <span className="text-sm text-blue-600">📍 Click to view on Google Maps</span>
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Phone</h3>
                <div className="space-y-2">
                  <a 
                    href={`tel:${brandConfig.contact.phone}`}
                    className="block text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {brandConfig.contact.phone} <span className="text-sm text-gray-500">(Main)</span>
                  </a>
                  {brandConfig.contact.phoneSecondary && (
                    <a 
                      href={`tel:${brandConfig.contact.phoneSecondary}`}
                      className="block text-gray-600 hover:text-red-600 transition-colors"
                    >
                      {brandConfig.contact.phoneSecondary} <span className="text-sm text-gray-500">(Secondary)</span>
                    </a>
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
                <p className="text-gray-600">
                  Conveniently located next to the laundromat for easy access!
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Store Hours</h3>
                <p className="text-gray-600 text-sm">
                  Please call us for current store hours
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandConfig.colors.primary }}>
              Send us a Message
            </h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="(914) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                style={{ backgroundColor: brandConfig.colors.primary }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
