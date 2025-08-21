import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Repai.vn – Verifiable Tech Certifications',
  description: 'Showcase and verify hackathon, bootcamp, and project certifications on Olym3 Blockchain.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-4 sm:py-8">{children}</main>
        <footer className="border-t mt-8 sm:mt-12">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:py-6 text-xs sm:text-sm text-gray-600 flex flex-wrap items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} repai.vn</p>
            <p>
              Powered by <a className="underline hover:text-primary" href="https://olym3.xyz" target="_blank" rel="noreferrer">Olym3 Blockchain</a>
            </p>
            <p>
              Github <a className="underline hover:text-primary" href="https://github.com/repaikit" target="_blank" rel="noreferrer">RepaiKit</a>
            </p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}


