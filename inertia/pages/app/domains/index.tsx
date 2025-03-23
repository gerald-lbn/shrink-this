import { type InferPageProps } from '@adonisjs/inertia/types'
import { useForm } from '@inertiajs/react'
import DomainsController from '#domains/controllers/domains_controller'
import { useRef } from 'react'

import EmptyState from '~/components/empty_state'
import Globe01 from '~/components/icons/globe-01'
import SearchMd from '~/components/icons/search-md'
import PageHeader from '~/components/page_header'
import { Button } from '~/components/ui/button'
import Dialog from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import AppLayout from '~/layouts/app_layout'

import './styles.css'

export default function Domains({
  user,
  domains,
}: InferPageProps<DomainsController, 'render'>) {
  const dialog = useRef<HTMLDialogElement>(null)

  const dialogClose = () => {
    dialog.current?.close()
    clearErrors('url')
    reset('url')
  }

  const { data, setData, post, processing, errors, reset, clearErrors } =
    useForm({
      url: '',
      userId: user.id,
    })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post('/domains', {
      onSuccess: dialogClose,
    })
  }

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
        onClose={dialogClose}
        main={
          <form id="add-domain-form" onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Your domain"
              placeholder="link.acme.com"
              required
              value={data.url}
              onChange={(e) => setData('url', e.target.value)}
              error={errors.url}
            />
          </form>
        }
        footer={
          <>
            <Button
              variant="secondary"
              onClick={() => {
                if (!processing) dialogClose()
              }}
              disabled={processing}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="add-domain-form"
              disabled={processing}
            >
              Add domain
            </Button>
          </>
        }
      />
    </AppLayout>
  )
}
