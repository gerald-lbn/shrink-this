import { AnchorHTMLAttributes } from 'react'
import './styles.css'

interface SidebarItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode
  label: string
}

export default function SidebarItem({ icon, label, href }: SidebarItemProps) {
  return (
    <a href={href} className="sidebar-item">
      {icon}
      <span>{label}</span>
    </a>
  )
}
