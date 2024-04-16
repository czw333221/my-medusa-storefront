import { Button, Container, Text } from "@medusajs/ui"
import { cookies } from "next/headers"

const ProductOnboardingCta = () => {
  const isOnboarding = cookies().get("_medusa_onboarding")?.value === "true"

  if (!isOnboarding) {
    return null
  }

  return (
    <Container className="max-w-4xl h-full bg-ui-bg-subtle w-full p-8">
      <div className="flex flex-col gap-y-4 center">
        <Text className="text-ui-fg-base text-xl">
          您的演示产品已成功创建！🎉
        </Text>
        <Text className="text-ui-fg-subtle text-small-regular">
          现在您可以继续在管理中设置您的商店。
        </Text>
        <a href="http://localhost:7001/a/orders?onboarding_step=create_order_nextjs">
          <Button className="w-full">在管理中继续设置</Button>
        </a>
      </div>
    </Container>
  )
}

export default ProductOnboardingCta
