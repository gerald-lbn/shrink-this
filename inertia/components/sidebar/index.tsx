import { HTMLAttributes } from 'react'

import IconBarChartSquare2 from '~/components/icons/bar-chart-square-2'
import Globe01 from '~/components/icons/globe-01'
import IconHomeLine from '~/components/icons/home-line'
import IconLink01 from '~/components/icons/link-01'
import IconSettings01 from '~/components/icons/settings-01'
import SidebarItem from '~/components/sidebar/item'

import './styles.css'

interface SidebarProps extends HTMLAttributes<HTMLElement> {}

export default function Sidebar({}: SidebarProps) {
  return (
    <aside>
      <div className="navigation">
        <header></header>
        <nav>
          <p className="subheading">General</p>
          <div className="section">
            <SidebarItem icon={<IconHomeLine />} label="Dashboard" href="/" />
            <SidebarItem icon={<IconLink01 />} label="Links" />
            <SidebarItem icon={<IconBarChartSquare2 />} label="Analytics" />
          </div>

          <p className="subheading">Settings</p>
          <div className="section">
            <SidebarItem icon={<Globe01 />} label="Domains" href="/domains" />
          </div>
        </nav>
      </div>
      <div className="footer">
        <nav>
          <SidebarItem icon={<IconSettings01 />} label="Settings" />
        </nav>
      </div>
    </aside>
  )
}
