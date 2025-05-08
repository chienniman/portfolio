import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  enum ProjectStatus {
    ONLINE = "上線中",
    OFFLINE = "未上線",
  }

  enum StatusColor {
    SUCCESS = "success",
    DEFAULT = "default",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <main className="container max-w-4xl py-12 md:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">程式作品集</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            空閒時進行的小程式專案
          </p>
        </div>
        <div className="grid gap-6">
          <ProjectCard
            title="budget-bot (Line 機器人)"
            link="https://github.com/chienniman/budget-bot"
            status={ProjectStatus.ONLINE}
            statusColor={StatusColor.SUCCESS}
          />
          <ProjectCard
            title="mc-servers (Docker 部屬 Minecraft 分流)"
            link="https://github.com/chienniman/mc-servers"
            status={ProjectStatus.OFFLINE}
            statusColor={StatusColor.DEFAULT}
          />
          <ProjectCard
            title="mc-bots (Minecraft 機器人)"
            link="https://github.com/chienniman/mc-bots"
            status={ProjectStatus.ONLINE}
            statusColor={StatusColor.SUCCESS}
          />
          <ProjectCard
            title="PackNMove (行車記錄器備份桌面 app)"
            link="https://github.com/chienniman/PackNMove"
            status={ProjectStatus.OFFLINE}
            statusColor={StatusColor.DEFAULT}
          />
          <ProjectCard
            title="TestMod (泰拉瑞亞測試原型模組)"
            link="https://github.com/chienniman/TestMod"
            status={ProjectStatus.OFFLINE}
            statusColor={StatusColor.DEFAULT}
          />
          <ProjectCard
            title="ez-chat-app (多人聊天室)"
            link="https://github.com/chienniman/ez-chat-app"
            status={ProjectStatus.OFFLINE}
            statusColor={StatusColor.DEFAULT}
          />
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
            <span>查看專案</span>
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
          <Badge className={`${getBadgeVariant()} font-normal`}>{status}</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
