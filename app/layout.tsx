import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DeadShot | Portfolio',
  description: "Hi, It's me Raj or DeadShot. I am a Student, Graphics Designer, Coder and a Sleepy Nerd.",
  icons: 'https://media.discordapp.net/attachments/1201570570765086780/1327591481837355068/deadshot-pfp.jpg?ex=67839f6a&is=67824dea&hm=a761fcd47ea6337e25927a9b4a3bf9ecf170caf53bf2e6fe268dd60d8847e786&=&format=webp&width=741&height=741',
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
