import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "登录",
  description: "登录您的 01道 账户。",
}

export default function Login() {
  return <LoginTemplate />
}
