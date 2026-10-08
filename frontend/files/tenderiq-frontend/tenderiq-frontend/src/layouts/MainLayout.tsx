import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, LogOut, Settings } from 'lucide-react'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/tenders', label: 'Tenders', icon: '📄' },
    { path: '/tenders/upload', label: 'Upload Tender', icon: '⬆️' },
    { path: '/company', label: 'Company Profile', icon: '🏢' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-brand-600">TenderIQ AI</h1>
        </div>

        {/* Nav */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`block px-4 py-2 rounded-md transition-colors ${
                isActive(item.path)
                  ? 'bg-brand-50 text-brand-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 space-y-2">
          <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            <Settings className="w-4 h-4 mr-3" />
            Settings
          </button>
          <button className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors">
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-gray-700 hover:text-gray-900"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="text-sm text-gray-500">
            Company • Bid Ready
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
