import { useForm } from '@inertiajs/react'

import AuthHeader from '~/components/auth_header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import AuthLayout from '~/layouts/auth_layout/auth_layout'

import '../styles.css'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    fullName: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post('/register')
  }

  return (
    <AuthLayout>
      <div className="auth-container">
        <div className="auth-content">
          <AuthHeader
            heading="Sign up"
            subheading="Create an account to continue"
          />
          <form className="credentials" method="post" onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Fullname"
              placeholder="Enter your fullname"
              required
              value={data.fullName}
              onChange={(e) => setData('fullName', e.target.value)}
              error={errors.fullName}
            />
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
                Get Started
              </Button>
            </div>
          </form>

          <p className="auth-footer">
            Already have an account?{' '}
            <Button variant="link-color">Log in</Button>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}
