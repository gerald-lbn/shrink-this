import { useRef } from 'react'

import EmptyState from '~/components/empty_state'
import Globe01 from '~/components/icons/globe-01'
import SearchMd from '~/components/icons/search-md'
import PageHeader from '~/components/page_header'
import { Button } from '~/components/ui/button'
import Dialog from '~/components/ui/dialog'
import AppLayout from '~/layouts/app_layout'

import './styles.css'

import { Input } from '~/components/ui/input'

export default function Dashboard() {
  const dialog = useRef<HTMLDialogElement>(null)

  const onAddDomain = () => dialog.current?.showModal()

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
        actions={<Button onClick={onAddDomain}>Add a domain</Button>}
        style={{
          border: '1px solid var(--border-secondary)',
          borderRadius: 'var(--radius-md)',
          height: '32rem',
          justifyContent: 'center',
        }}
      />

      <Dialog
        ref={dialog}
        icon={<Globe01 />}
        title="Add a domain"
        description="Add your custom domain to start using it with the application."
        main={
          <form id="add-domain-form">
            <Input
              type="text"
              label="Your domain"
              placeholder="link.acme.com"
              required
            />
          </form>
        }
        footer={
          <>
            <Button variant="secondary" onClick={() => dialog.current?.close()}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="add-domain-form">
              Add domain
            </Button>
          </>
        }
      />
    </AppLayout>
  )
}
