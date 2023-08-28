import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from './Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wideleaf',
  description: 'FLexible editor, for free!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
       <head />
       <body>
         <Provider>
         <body className={inter.className}>{children}</body>
         </Provider>
       </body>
     </html>
  )
}
