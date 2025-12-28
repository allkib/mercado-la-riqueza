import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, question, category } = body

    // TODO: Add validation
    // TODO: Send email notification
    // TODO: Save to database

    // For now, just return success
    console.log('Question form submission:', { name, email, phone, question, category })

    return NextResponse.json(
      { success: true, message: 'Thank you for your question!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Question form error:', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
