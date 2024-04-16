import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import { logCustomerIn } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(logCustomerIn, null)

  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      <h1 className="text-large-semi uppercase mb-6">欢迎回来</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
      登录以获得更好的购物体验。
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="邮箱"
            name="email"
            type="email"
            title="输入有效的电子邮件地址。"
            autoComplete="email"
            required
          />
          <Input
            label="密码"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <ErrorMessage error={message} />
        <SubmitButton className="w-full mt-6">登录</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        不是会员?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
        >
          加入我们
        </button>
        .
      </span>
    </div>
  )
}

export default Login
