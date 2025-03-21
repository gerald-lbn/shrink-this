import PageHeader from '~/components/page_header'
import AppLayout from '~/layouts/app_layout'

import './styles.css'

export default function Dashboard() {
  return (
    <AppLayout>
      <PageHeader
        heading="My domains"
        subheading="Add, configure, and verify your custom domains"
      />
    </AppLayout>
  )
}
