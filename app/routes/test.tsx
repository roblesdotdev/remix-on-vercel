import { useLoaderData } from '@remix-run/react'

export function loader() {
  return {
    MODE: process.env.NODE_ENV,
  }
}

export default function TestRoute() {
  const { MODE } = useLoaderData<typeof loader>()
  return (
    <div className="py-8">
      <pre>{MODE}</pre>
    </div>
  )
}
