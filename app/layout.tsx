import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import FileDataProvider from './lib/providers/useFileDataProvider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Funnel Preview',
  description: 'Preview JSON funnel data',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        <FileDataProvider>
          <div className="min-h-screen flex flex-col justify-center items-center">{children}</div>
        </FileDataProvider>
      </body>
    </html>
  )
}
