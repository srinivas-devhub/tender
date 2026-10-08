import React, { useState } from 'react'
import { Upload, FileText, AlertCircle } from 'lucide-react'
import { api } from '../utils/api'

export const TenderUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile?.type === 'application/pdf') {
      setFile(droppedFile)
      setError('')
    } else {
      setError('Please upload a PDF file')
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile?.type === 'application/pdf') {
      setFile(selectedFile)
      setError('')
    } else {
      setError('Please select a PDF file')
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file')
      return
    }

    setUploading(true)
    setError('')

    try {
      await api.uploadTender(file)
      setSuccess(true)
      setFile(null)
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError('Failed to upload tender')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Upload Tender</h1>

      <div className="card p-8">
        {/* Drop Zone */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
          className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 transition-colors"
        >
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Drag and drop your PDF here</h3>
          <p className="text-gray-600 mb-4">or</p>
          <label className="inline-block">
            <span className="btn-primary cursor-pointer">Browse Files</span>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
          </label>
        </div>

        {/* File Info */}
        {file && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">{file.name}</p>
                <p className="text-sm text-gray-600">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">✓ Tender uploaded successfully</p>
          </div>
        )}

        {/* Action */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading...' : 'Upload Tender'}
          </button>
          {file && (
            <button
              onClick={() => setFile(null)}
              className="btn-secondary"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="mt-8 card p-6">
        <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
        <ol className="space-y-3 text-sm text-gray-700">
          <li>1. <strong>Extraction</strong> - We extract text and metadata from your PDF</li>
          <li>2. <strong>Analysis</strong> - Our AI analyzes requirements, deadlines, and risks</li>
          <li>3. <strong>Matching</strong> - We compare tender requirements with your company profile</li>
          <li>4. <strong>Assessment</strong> - You get a bid readiness score and recommendation</li>
        </ol>
      </div>
    </div>
  )
}
