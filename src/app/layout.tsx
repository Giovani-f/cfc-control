import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CFC Control - Gerencie sua auto escola de forma simples e eficiente',
  description:
    'Simplifique, otimize e modernize seus processos com nossa plataforma de gestão especializada para autoescolas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
