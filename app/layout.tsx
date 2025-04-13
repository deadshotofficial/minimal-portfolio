import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DeadShot | Portfolio',
  description: "Hi, It's me Raj or DeadShot. I am a Student, Graphics Designer, Coder and a Sleepy Nerd.",
  icons: 'https://avatars.githubusercontent.com/u/63696670?v=4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
