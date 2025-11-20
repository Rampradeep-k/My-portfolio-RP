import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rampradeep K - Backend Developer',
  description: 'Backend Developer specializing in Node.js, APIs, and scalable systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Simple Navigation */}
        {/* <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-xl font-bold text-gray-900">Rampradeep K</a>
              <div className="flex gap-6">
                <a href="#projects" className="text-gray-700 hover:text-blue-600 transition duration-300">Projects</a>
                <a href="#skills" className="text-gray-700 hover:text-blue-600 transition duration-300">Skills</a>
                <a href="#experience" className="text-gray-700 hover:text-blue-600 transition duration-300">Experience</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
              </div>
            </div>
          </div>
        </nav> */}
        
        {/* Add padding for fixed nav */}
        <div /* className="pt-16" */>
          {children}
        </div>
      </body>
    </html>
  )
}