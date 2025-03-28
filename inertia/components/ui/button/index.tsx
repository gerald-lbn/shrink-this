import * as React from 'react'

import './styles.css'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'link-color'
    | 'link-gray'
    | 'destructive'
  iconOnly?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', iconOnly, ...props },
    ref,
  ) => {
    return (
      <button
        className={`button variant-${variant} size-${size} ${
          iconOnly ? 'icon-only' : ''
        } ${className}`}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button }
