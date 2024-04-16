"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="max-w-sm flex flex-col items-center">
      <h1 className="text-large-semi uppercase mb-6">
        注册 01道商店 
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        创建您的 01道商店 档案，获得更好的购物体验。
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="名字"
            name="first_name"
            required
            autoComplete="given-name"
          />
          <Input
            label="姓氏"
            name="last_name"
            required
            autoComplete="family-name"
          />
          <Input
            label="邮箱"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
          <Input label="电话号码" name="phone" type="tel" autoComplete="tel" />
          <Input
            label="密码"
            name="password"
            required
            type="password"
            autoComplete="new-password"
          />
        </div>
        <ErrorMessage error={message} />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          创建账户即表示您同意 01道商店 的以下条款{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            隐私政策
          </LocalizedClientLink>{" "}
          和{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            使用条款
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6">加入我们</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        已经注册？{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          登录
        </button>
        .
      </span>
    </div>
  )
}

export default Register
