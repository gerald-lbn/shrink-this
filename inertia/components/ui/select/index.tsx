import * as React from 'react'

import './styles.css'

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  hint?: string
  error?: string
  children: React.ReactNode
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, hint, error, children, ...props }, ref) => {
    return (
      <div className="select-group">
        {label && <label className="label">{label}</label>}
        <select className="select" ref={ref} {...props}>
          {children}
        </select>
        {hint && !error && <span className="hint">{hint}</span>}
        {error && <span className="error">{error}</span>}
      </div>
    )
  },
)
Select.displayName = 'Select'

export { Select }
