import Navbar from '@components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'rreglo',
  description: 'This project is created for upskilling for reactjs, next.js and tailwind.css',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar />
        <div className='px-10 py-5'>
          {children}
        </div>
      </body>
    </html>
  )
}
