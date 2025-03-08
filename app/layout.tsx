import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Greisoft'
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className="antialiased">{props.children}</body>
    </html>
  )
}
