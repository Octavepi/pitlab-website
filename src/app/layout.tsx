import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Web3Provider } from '@/contexts/Web3Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PITLAB - Sweat-secured. ARM-powered. Built in the PIT.',
  description: 'ARMPIT ($PITLAB) - Experimental meme-utility token supporting open hardware, DIY security, and grassroots developers building the Pi Trezor initiative.',
  keywords: ['PITLAB', 'ARMPIT', 'cryptocurrency', 'hardware wallet', 'Raspberry Pi', 'Base chain', 'ERC-20', 'open source', 'meme token'],
  authors: [{ name: 'PITLAB Contributors' }],
  openGraph: {
    title: 'PITLAB - Sweat-secured. ARM-powered. Built in the PIT.',
    description: 'Experimental meme-utility token supporting open hardware development',
    url: 'https://pitlab.eth',
    siteName: 'PITLAB',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PITLAB - Built in the PIT',
    description: 'Experimental meme-utility token supporting open hardware development',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  )
}
