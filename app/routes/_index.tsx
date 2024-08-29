import { useLoaderData } from '@remix-run/react'
import { json } from '@vercel/remix'
import { db } from '~/utils/db.server'

export async function loader() {
  const issues = await db.issue.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' },
  })
  return json({
    issues,
  })
}

export default function Index() {
  const { issues } = useLoaderData<typeof loader>()
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-lg">Welcome to Remix on Vercel!</h1>
      <div className="mt-6">
        <pre>{JSON.stringify(issues, null, 2)}</pre>
      </div>
    </div>
  )
}
