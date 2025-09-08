import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/landing/Header'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export const metadata: Metadata = {
  title: 'SP Developers | Exceptional Properties near Hyderabad',
  description: 'Open plots and real estate near Hyderabad. Exceptional properties. Exceptional clients.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  )
}


