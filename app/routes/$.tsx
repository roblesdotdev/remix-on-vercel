import { Link } from '@remix-run/react'
import { GeneralErrorBoundary } from '~/components/error-boundary'

export function loader() {
  throw new Response('Not found', { status: 404 })
}

export default function NotFoundRoute() {
  return <p>This should not be shown</p>
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-xl">Not found page</h1>
      <div className="py-4">
        <Link to="/" className="underline">
          Back to home
        </Link>
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary statusHandlers={{ 404: () => <NotFound /> }} />
}
