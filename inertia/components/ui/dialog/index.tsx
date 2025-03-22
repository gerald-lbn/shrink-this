import './styles.css'

interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  icon: React.ReactNode
  title?: string
  description?: string
  main: React.ReactNode
  footer?: React.ReactNode
  ref?: React.Ref<HTMLDialogElement>
}

export default function Modal({
  open,
  icon,
  title,
  description,
  main,
  footer,
  ...props
}: DialogProps) {
  return (
    <dialog open={open} {...props}>
      <header>
        <div className="icon">{icon}</div>
        <div className="heading">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
      </header>
      <main>{main}</main>
      {footer && <footer>{footer}</footer>}
    </dialog>
  )
}
