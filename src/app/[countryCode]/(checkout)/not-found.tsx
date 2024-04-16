import InteractiveLink from "@modules/common/components/interactive-link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404",
  description: "出错了",
}

export default async function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">未找到页面</h1>
      <p className="text-small-regular text-ui-fg-base">
        您尝试访问的页面不存在。
      </p>
      <InteractiveLink href="/">转到首页</InteractiveLink>
    </div>
  )
}
