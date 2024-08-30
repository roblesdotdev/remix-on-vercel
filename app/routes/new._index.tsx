import { Form, redirect } from '@remix-run/react'
import { type ActionFunctionArgs } from '@vercel/remix'
import { db } from '~/utils/db.server'
import { CACHE_CONTROL } from '~/utils/http.server'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const intent = formData.get('intent')
  if (intent !== 'create') {
    throw new Response('Invalid submission', { status: 400 })
  }
  const { title, description } = Object.fromEntries(formData)

  if (typeof title !== 'string' || typeof description !== 'string') {
    throw new Response('Title and description are required', { status: 400 })
  }

  await db.issue.create({
    data: {
      title,
      description,
      author: 'roblesdotdev',
    },
  })

  return redirect('/', {
    headers: {
      'Cache-Control': CACHE_CONTROL.REVALIDATE,
    },
  })
}

export default function NewIssueRoute() {
  return (
    <div className="container py-8">
      <Form method="POST">
        <div className="flex flex-col gap-2">
          <div>
            <label className="text-sm text-neutral-400" htmlFor="title">
              Title
            </label>
            <input
              required
              id="title"
              type="text"
              name="title"
              className="w-full bg-neutral-400/5 px-3 py-2"
              placeholder="Issue title"
            />
          </div>
          <div>
            <label className="text-sm text-neutral-400" htmlFor="description">
              Description
            </label>
            <textarea
              required
              id="description"
              name="description"
              className="w-full resize-none bg-neutral-400/5 px-3 py-2"
              placeholder="Issue title"
            />
          </div>

          <div className="self-end">
            <button
              type="submit"
              name="intent"
              value="create"
              className="border bg-neutral-200 px-3 py-2 text-sm font-medium text-neutral-900"
            >
              Create
            </button>
          </div>
        </div>
      </Form>
    </div>
  )
}
