import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Lilita_One } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { PersistentHeader } from '@/components/persistent-header'
import { MusicProvider } from '@/contexts/MusicContext'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });
const lilitaOne = Lilita_One({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'V-LAB EBT Kompresi UNS',
  description: 'Platform interaktif untuk mempelajari energi terbarukan dengan virtual lab dan simulasi',
  icons: {
    icon: [
      {
        url: '/23hplkbEsTWtr.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="h-full">
      <head>
        <meta name="apple-mobile-web-app-title" content="V-LAB EBT" />
      </head>
      <body className={`font-sans antialiased`}>
        <MusicProvider>
          {/* Background Image akan muncul sekarang */}
          <div className="background-overlay"></div>
          <div className="main-content">
            <PersistentHeader showBackButton={false} />
            {children}
            <Analytics />
          </div>
        </MusicProvider>
      </body>
    </html>
  )
}