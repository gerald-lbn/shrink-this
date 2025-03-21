import { HTMLAttributes } from 'react'

import './styles.css'

interface PageHeaderProps extends HTMLAttributes<HTMLElement> {
  heading: string
  subheading?: string
}

export default function PageHeader({ heading, subheading }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="heading">
        <h1>{heading}</h1>
        {subheading && <p>{subheading}</p>}
      </div>
    </header>
  )
}
