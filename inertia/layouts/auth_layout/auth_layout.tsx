import { HTMLAttributes } from 'react'

import './styles.css'

interface AuthLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="auth-layout">
      <main>{children}</main>
      <aside></aside>
    </div>
  )
}
