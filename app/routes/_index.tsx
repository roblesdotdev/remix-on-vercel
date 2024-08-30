import { Await, useLoaderData } from '@remix-run/react'
import { type HeadersFunction, defer } from '@vercel/remix'
import { Suspense } from 'react'
import { GeneralErrorBoundary } from '~/components/error-boundary'
import { IssueList, IssueListSkeleton } from '~/components/issue-list'
import { db } from '~/utils/db.server'
import { CACHE_CONTROL } from '~/utils/http.server'

export async function loader() {
  const issues = db.issue
    .findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
    })
    .then(result => result)
  return defer(
    {
      issues,
    },
    {
      headers: {
        'Cache-Control': CACHE_CONTROL.DEFAULT,
      },
    },
  )
}

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': CACHE_CONTROL.DEFAULT,
  }
}

export default function Index() {
  const { issues } = useLoaderData<typeof loader>()
  return (
    <div>
      <h1>Recent issues</h1>
      <div className="mt-4 max-w-screen-sm">
        <Suspense fallback={<IssueListSkeleton />}>
          <Await resolve={issues}>
            {resolvedIssues => <IssueList issues={resolvedIssues} />}
          </Await>
        </Suspense>
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />
}
