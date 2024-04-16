import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 px-2 flex flex-col justify-center items-start">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        购物车
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        您的购物车中没有任何商品。让我们改变这种状况，使用链接开始浏览我们的产品。
      </Text>
      <div>
        <InteractiveLink href="/store">浏览产品</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
