import React, { useState, useEffect } from 'react'
import { api } from '../utils/api'
import { Tender } from '../types'
import { TrendingUp, AlertCircle, FileText } from 'lucide-react'

export const Dashboard: React.FC = () => {
  const [tenders, setTenders] = useState<Tender[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTenders()
  }, [])

  const loadTenders = async () => {
    try {
      const data = await api.getTenders()
      setTenders(data)
    } catch (error) {
      console.error('Failed to load tenders:', error)
    } finally {
      setLoading(false)
    }
  }

  const stats = [
    { label: 'Total Tenders', value: tenders.length, icon: <FileText className="w-6 h-6" /> },
    { label: 'Suitable', value: 11, icon: <TrendingUp className="w-6 h-6 text-green-600" /> },
    { label: 'Caution', value: 8, icon: <AlertCircle className="w-6 h-6 text-yellow-600" /> },
    { label: 'Not Recommended', value: 5, icon: <AlertCircle className="w-6 h-6 text-red-600" /> },
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className="text-blue-600">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Tenders */}
      <div className="card">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Tenders</h2>
        </div>
        {loading ? (
          <div className="p-6 text-center text-gray-500">Loading...</div>
        ) : tenders.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No tenders yet</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3 text-left font-medium text-gray-900">Title</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900">Organization</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900">Status</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900">Value</th>
                </tr>
              </thead>
              <tbody>
                {tenders.map((tender) => (
                  <tr key={tender.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">{tender.title}</td>
                    <td className="px-6 py-4">{tender.organization}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        tender.processing_status === 'COMPLETED' ? 'badge-success' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {tender.processing_status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {tender.tender_value ? `₹${(tender.tender_value / 1000000).toFixed(1)}Cr` : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
