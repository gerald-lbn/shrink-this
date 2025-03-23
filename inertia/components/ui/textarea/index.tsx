import * as React from 'react'

import './styles.css'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  hint?: string
  error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, hint, error, ...props }, ref) => {
    return (
      <div className="textarea-group">
        {label && <label className="label">{label}</label>}
        <textarea className="textarea" ref={ref} {...props} />
        {hint && !error && <span className="hint">{hint}</span>}
        {error && <span className="error">{error}</span>}
      </div>
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
