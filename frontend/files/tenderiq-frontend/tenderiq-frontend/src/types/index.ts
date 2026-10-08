// Auth
export interface User {
  id: string
  email: string
  user_metadata?: {
    full_name?: string
  }
}

// Company
export interface CompanyProfile {
  id: string
  user_id: string
  company_name: string
  company_type: string
  industry: string
  description?: string
  website?: string
  location: string
  state: string
  country: string
  annual_turnover?: number
  average_turnover?: number
  years_in_business: number
  relevant_experience_years: number
  similar_projects_count: number
  gst_registered: boolean
  pan_available: boolean
  company_registered: boolean
  created_at: string
  updated_at: string
}

// Tender
export interface Tender {
  id: string
  user_id: string
  title: string
  reference_number: string
  organization: string
  department?: string
  location: string
  tender_value?: number
  emd?: number
  performance_security?: number
  contract_duration?: string
  pdf_storage_path: string
  page_count: number
  processing_status: 'UPLOADING' | 'EXTRACTING' | 'ANALYZING' | 'MATCHING' | 'COMPLETED' | 'FAILED'
  created_at: string
  updated_at: string
}

// Analysis
export interface BidAssessment {
  id: string
  tender_id: string
  company_id: string
  score: number
  recommendation: 'SUITABLE_TO_APPLY' | 'APPLY_WITH_CAUTION' | 'NOT_RECOMMENDED'
  eligibility_score: number
  technical_score: number
  experience_score: number
  financial_score: number
  documentation_score: number
  explanation: string
  created_at: string
  updated_at: string
}

// Requirement Match
export interface RequirementMatch {
  id: string
  requirement_id: string
  requirement: string
  category: string
  tender_value: string
  company_value: string
  result: 'PASS' | 'PARTIAL' | 'FAIL' | 'UNKNOWN'
  reason?: string
  source_page?: number
}

// Risk
export interface Risk {
  id: string
  tender_id: string
  category: string
  title: string
  description: string
  severity: 'LOW' | 'MEDIUM' | 'HIGH'
  source_page?: number
}

// Deadline
export interface Deadline {
  id: string
  tender_id: string
  deadline_type: 'PRE_BID' | 'SUBMISSION' | 'TECHNICAL_OPENING' | 'FINANCIAL_OPENING' | 'OTHER'
  deadline_date: string
  source_page?: number
}

// Document
export interface RequiredDocument {
  id: string
  tender_id: string
  document_name: string
  mandatory: boolean
  source_page?: number
  status?: 'NOT_SUBMITTED' | 'SUBMITTED' | 'VERIFIED'
}
