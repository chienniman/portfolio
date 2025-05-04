import type React from "react"
import "@/app/globals.css"
import { Noto_Sans_SC } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata = {
  title: "我的作品集",
  description: "展示我最近完成的项目作品",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={notoSansSC.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
