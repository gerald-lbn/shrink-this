import { HTMLAttributes } from 'react'
import './styles.css'

interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  title: string
  description: string
  actions?: React.ReactNode
}

export default function EmptyState({
  icon,
  title,
  description,
  actions,
  ...props
}: EmptyStateProps) {
  return (
    <div className="empty-state" {...props}>
      <div className="content">
        <div className="icon">{icon}</div>
        <div className="info">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="actions">{actions}</div>
    </div>
  )
}
