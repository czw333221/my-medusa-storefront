import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "404",
  description: "出错了",
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">未找到页面</h1>
      <p className="text-small-regular text-ui-fg-base">
        您试图访问的购物车不存在。请清除 cookie 并尝试
        再试一次。
      </p>
      <InteractiveLink href="/">转到首页</InteractiveLink>
    </div>
  )
}
