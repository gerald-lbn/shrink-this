import { useForm } from '@inertiajs/react'

import AuthHeader from '~/components/auth_header'
import AuthLayout from '~/layouts/auth_layout/auth_layout'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import '../styles.css'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post('/login')
  }

  return (
    <AuthLayout>
      <div className="auth-container">
        {/* Logo */}

        {/* Content */}
        {/* Header and form */}
        <div className="auth-content">
          {/* Header */}
          <AuthHeader heading="Log in" subheading="Welcome back! Please enter your details." />
          {/* Content */}
          <form className="credentials" method="post" onSubmit={handleSubmit}>
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              required
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              error={errors.email}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              required
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              error={errors.password}
            />
            <div className="auth-actions">
              <Button type="submit" disabled={processing}>
                Continue
              </Button>
              <Button type="button" variant="secondary" disabled={processing}>
                Log in with a passkey
              </Button>
            </div>
          </form>

          {/* Row */}
          <p className="auth-footer">
            Don't have an account? <Button variant="link-color">Sign up</Button>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}
