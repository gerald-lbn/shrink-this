import { HTMLAttributes } from 'react'
import Sidebar from '~/components/sidebar'
import './styles.css'

interface AppLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-layout">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
