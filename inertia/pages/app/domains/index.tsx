import PageHeader from '~/components/page_header'
import AppLayout from '~/layouts/app_layout'

import './styles.css'
import EmptyState from '~/components/empty_state'
import { Button } from '~/components/ui/button'
import SearchMd from '~/components/icons/search-md'

export default function Dashboard() {
  return (
    <AppLayout>
      <PageHeader
        heading="My domains"
        subheading="Add, configure, and verify your custom domains"
      />

      <EmptyState
        icon={<SearchMd />}
        title="No domains found"
        description="You don't have any domains yet. Add a domain to get started."
        actions={<Button>Add a domain</Button>}
      />
    </AppLayout>
  )
}
