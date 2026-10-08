import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Brain, Shield, TrendingUp } from 'lucide-react'

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="px-6 py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-brand-600">TenderIQ AI</h1>
          <div className="space-x-4">
            <Link to="/login" className="btn-secondary px-6">
              Sign In
            </Link>
            <Link to="/register" className="btn-primary px-6">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Know Before You Bid
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          TenderIQ AI analyzes complex tender documents, compares requirements with your company's capabilities, and provides an explainable bid-readiness assessment.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/register" className="btn-primary px-8 py-3">
            Analyze a Tender
          </Link>
          <button className="btn-outline px-8 py-3">
            Create Company Profile
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Upload Tender</h4>
              <p className="text-gray-600 text-sm">
                Simply upload your tender PDF and let AI analyze it.
              </p>
            </div>
            <div className="card p-6 text-center">
              <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">AI Analysis</h4>
              <p className="text-gray-600 text-sm">
                We extract requirements, deadlines, risks and compliance needs.
              </p>
            </div>
            <div className="card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Get Score</h4>
              <p className="text-gray-600 text-sm">
                Receive a bid-readiness score and actionable recommendation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to make smarter bid decisions?
        </h3>
        <Link to="/register" className="btn-primary px-8 py-3 inline-block">
          Get Started Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8 text-center text-sm text-gray-600">
        <p>© 2024 TenderIQ AI. All rights reserved.</p>
      </footer>
    </div>
  )
}
