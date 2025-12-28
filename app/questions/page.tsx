'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { brandConfig } from '@/config/brand'

interface QuestionFormData {
  name: string
  email: string
  phone: string
  question: string
  category: string
}

export default function QuestionsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuestionFormData>()

  const onSubmit = async (data: QuestionFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/questions', {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Have a Question?</h1>
          <p className="text-xl text-gray-600">
            We're here to help! Ask us anything about our products, hours, or services.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Thank you for your question! We'll get back to you as soon as possible.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Something went wrong. Please try again or call us at {brandConfig.contact.phone} or {brandConfig.contact.phoneSecondary}.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Question Category
              </label>
              <select
                id="category"
                {...register('category')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Select a category</option>
                <option value="products">Products & Inventory</option>
                <option value="hours">Store Hours</option>
                <option value="pricing">Pricing</option>
                <option value="location">Location & Directions</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                Your Question *
              </label>
              <textarea
                id="question"
                {...register('question', { required: 'Question is required' })}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Please ask your question here..."
              />
              {errors.question && (
                <p className="mt-1 text-sm text-red-600">{errors.question.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              style={{ backgroundColor: brandConfig.colors.primary }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Question'}
            </button>
          </form>

          {/* Quick Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center mb-4">
              Prefer to speak with someone directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${brandConfig.contact.phone}`}
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                <span className="text-xl">📞</span>
                <span className="font-semibold">{brandConfig.contact.phone}</span>
                <span className="text-sm text-gray-500">(Main)</span>
              </a>
              {brandConfig.contact.phoneSecondary && (
                <a
                  href={`tel:${brandConfig.contact.phoneSecondary}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <span className="text-xl">📞</span>
                  <span className="font-semibold">{brandConfig.contact.phoneSecondary}</span>
                  <span className="text-sm text-gray-500">(Secondary)</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: brandConfig.colors.primary }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Where are you located?</h3>
              <p className="text-gray-600">
                We're located at {brandConfig.contact.address} in {brandConfig.contact.city}, 
                {brandConfig.contact.state}, right next to the laundromat for your convenience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What products do you sell?</h3>
              <p className="text-gray-600">
                We specialize in fresh produce and quality grocery items. All our products are 
                fresh and brand new, with competitive prices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What are your store hours?</h3>
              <p className="text-gray-600">
                Please call us at {brandConfig.contact.phone} or {brandConfig.contact.phoneSecondary} for current store hours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Do you accept credit cards?</h3>
              <p className="text-gray-600">
                For payment options, please contact us directly or visit the store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
