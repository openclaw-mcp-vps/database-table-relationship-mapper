import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Relationship Mapper — Visualize SQL Database Relationships',
  description: 'Upload a SQL dump and instantly generate interactive relationship diagrams. See foreign key connections, identify orphaned tables, and understand your legacy database schema.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="10296f75-0690-4624-b3a4-6a19ca9e8277"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
