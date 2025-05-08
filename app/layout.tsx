import type React from "react"
import "@/app/globals.css"
import { Noto_Sans_SC } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata = {
  title: "程式作品集",
  description: "展示我完成過的程式專案",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={notoSansSC.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
