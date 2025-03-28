import { HTMLAttributes } from 'react'

import './styles.css'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  size: 'sm' | 'md' | 'lg'
  color: 'gray' | 'brand' | 'error' | 'warning' | 'success'
  type: 'pill' | 'badge' | 'modern'
}

export default function Badge({
  size,
  color,
  type,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={`badge size-${size} color-${color} variant-${type}`}
      {...props}
    >
      {children}
    </div>
  )
}
