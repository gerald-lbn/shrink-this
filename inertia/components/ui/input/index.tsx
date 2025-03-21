import * as React from 'react'

import './styles.css'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, hint, error, ...props }, ref) => {
    return (
      <div className="input-group">
        {label && <label className="label">{label}</label>}
        <input className="input" ref={ref} {...props} />
        {hint && !error && <span className="hint">{hint}</span>}
        {error && <span className="error">{error}</span>}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
