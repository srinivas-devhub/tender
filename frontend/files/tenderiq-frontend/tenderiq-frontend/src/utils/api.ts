const API_BASE = '/api'

export const api = {
  // Auth
  login: async (email: string, password: string) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    return res.json()
  },

  register: async (email: string, password: string, fullName: string) => {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, full_name: fullName }),
    })
    return res.json()
  },

  logout: async () => {
    return fetch(`${API_BASE}/auth/logout`, { method: 'POST' })
  },

  // Company
  getCompany: async () => {
    const res = await fetch(`${API_BASE}/company`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.json()
  },

  updateCompany: async (data: any) => {
    const res = await fetch(`${API_BASE}/company`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    })
    return res.json()
  },

  // Tenders
  getTenders: async () => {
    const res = await fetch(`${API_BASE}/tenders`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.json()
  },

  getTender: async (id: string) => {
    const res = await fetch(`${API_BASE}/tenders/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.json()
  },

  uploadTender: async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch(`${API_BASE}/tenders/upload`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      body: formData,
    })
    return res.json()
  },

  analyzeTender: async (id: string) => {
    const res = await fetch(`${API_BASE}/tenders/${id}/analyze`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.json()
  },

  // Analysis
  getAnalysis: async (tenderId: string) => {
    const res = await fetch(`${API_BASE}/tenders/${tenderId}/analysis`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.json()
  },

  getRequirements: async (tenderId: string) => {
    const res = await fetch(`${API_BASE}/tenders/${tenderId}/requirements`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.json()
  },

  getRisks: async (tenderId: string) => {
    const res = await fetch(`${API_BASE}/tenders/${tenderId}/risks`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.json()
  },

  getDeadlines: async (tenderId: string) => {
    const res = await fetch(`${API_BASE}/tenders/${tenderId}/deadlines`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.json()
  },
}
