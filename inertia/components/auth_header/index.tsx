import { HTMLAttributes } from 'react'

import './styles.css'

interface AuthHeaderProps extends HTMLAttributes<HTMLDivElement> {
  heading: string
  subheading: string
}

export default function AuthHeader({ heading, subheading }: AuthHeaderProps) {
  return (
    <header className="auth-header">
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </header>
  )
}
