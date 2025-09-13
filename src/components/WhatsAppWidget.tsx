"use client"

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/919704229406?text=${encodedMessage}`
      window.open(whatsappUrl, '_blank')
      setMessage('')
      setIsOpen(false)
    }
  }

  const handleQuickMessage = (quickMsg: string) => {
    const encodedMessage = encodeURIComponent(quickMsg)
    const whatsappUrl = `https://wa.me/919704229406?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-colors group"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-xs font-bold text-white">1</span>
        </div>
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-72 sm:w-80 max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)]">
          <div className="rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">SP Developers</h3>
                  <p className="text-xs text-green-100">Typically replies in minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-100 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gray-50">
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3">
                  Hi! 👋 How can we help you with your property investment?
                </p>
                
                {/* Quick Message Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleQuickMessage("Hi, I'm interested in Sky Land Organic Farm plots. Can you share more details?")}
                    className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                  >
                    📍 Sky Land Organic Farm - Plot Details
                  </button>
                  <button
                    onClick={() => handleQuickMessage("Hi, I want to know about Green Country II project.")}
                    className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                  >
                    🏡 Green Country II - Info
                  </button>
                  <button
                    onClick={() => handleQuickMessage("Hi, I'd like to schedule a site visit.")}
                    className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                  >
                    📅 Schedule Site Visit
                  </button>
                  <button
                    onClick={() => handleQuickMessage("Hi, I want to know about pricing and EMI options.")}
                    className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                  >
                    💰 Pricing & EMI Options
                  </button>
                </div>
              </div>

              {/* Custom Message Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
