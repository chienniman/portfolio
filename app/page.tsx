import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <main className="container max-w-4xl py-12 md:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">我的作品集</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            以下是我最近完成的项目作品集，包含项目名称、链接及当前状态
          </p>
        </div>

        <div className="grid gap-6">
          <ProjectCard
            title="电商平台重设计"
            link="https://ecommerce-redesign.example.com"
            status="已上线"
            statusColor="success"
          />
{/* 
          <ProjectCard
            title="健康追踪应用"
            link="https://health-tracker.example.com"
            status="测试中"
            statusColor="warning"
          />

          <ProjectCard
            title="企业管理系统"
            link="https://enterprise-management.example.com"
            status="开发中"
            statusColor="default"
          />

          <ProjectCard
            title="社交媒体分析工具"
            link="https://social-analytics.example.com"
            status="已上线"
            statusColor="success"
          />

          <ProjectCard
            title="在线教育平台"
            link="https://edu-platform.example.com"
            status="已上线"
            statusColor="success"
          />

          <ProjectCard
            title="旅游预订系统"
            link="https://travel-booking.example.com"
            status="测试中"
            statusColor="warning"
          /> */}
        </div>
      </main>
    </div>
  )
}

function ProjectCard({
  title,
  link,
  status,
  statusColor = "default",
}: {
  title: string
  link: string
  status: string
  statusColor?: "default" | "success" | "warning"
}) {
  // 根据状态设置徽章颜色
  const getBadgeVariant = () => {
    switch (statusColor) {
      case "success":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30"
      case "warning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900/30"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary hover:underline"
          >
            <span>查看项目</span>
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
          <Badge className={`${getBadgeVariant()} font-normal`}>{status}</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
