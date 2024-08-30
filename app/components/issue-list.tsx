import { type Issue } from '@prisma/client'
import { type SerializeFrom } from '@vercel/remix'

export function IssueList({ issues }: { issues: SerializeFrom<Issue[]> }) {
  return (
    <ul className="flex flex-col divide-y border">
      {issues.map(issue => (
        <li key={issue.id} className="h-[88px] px-4 py-3 text-sm">
          <p className="line-clamp-2 text-neutral-400">
            <span className="font-medium text-neutral-300">{issue.title}</span>
            {' | '}
            {issue.description}
          </p>
          <p className="mt-2 text-xs">
            <span className="text-neutral-400">by</span> {issue.author}
          </p>
        </li>
      ))}
    </ul>
  )
}

export function IssueListSkeleton() {
  return (
    <ul className="flex flex-col divide-y border">
      {Array.from({ length: 3 }, (_, idx) => (
        <li
          key={idx}
          className="h-[88px] w-full animate-pulse bg-neutral-400/5"
        />
      ))}
    </ul>
  )
}
