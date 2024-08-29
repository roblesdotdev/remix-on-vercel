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
    <div className="container py-8">
      <h1 className="text-lg">Recent issues</h1>
      <div className="mt-6 max-w-screen-sm">
        <ul className="flex flex-col gap-2 divide-y border">
          {issues.map(issue => (
            <li key={issue.id} className="px-4 py-3 text-sm">
              <p className="line-clamp-2 text-neutral-400">
                <span className="font-medium text-neutral-300">
                  {issue.title}
                </span>
                {' | '}
                {issue.description}
              </p>
              <p className="mt-2 text-xs">
                <span className="text-neutral-400">by</span> {issue.author}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
