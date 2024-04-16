import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">请注意：</span> 仅供测试之用。
    </Badge>
  )
}

export default PaymentTest
