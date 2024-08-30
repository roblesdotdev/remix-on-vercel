import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { type MetaFunction } from '@vercel/remix'
import '~/styles/global.css'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix on Vercel' },
    { name: 'description', content: 'Welcome to Remix on Vercel!' },
  ]
}

export const config = { runtime: 'nodejs' }

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex h-dvh flex-col">
        <div className="container pt-8">
          <div className="w-full border border-dashed px-4 py-3">
            <h1 className="mb-2 font-medium">Issue Tracker</h1>
            <p className="text-sm text-neutral-400">
              Simple app built to explore how Remix works on Vercel, using
              Postgres and Prisma.
            </p>
          </div>
        </div>
        <main className="container flex-1 pt-8">{children}</main>
        <footer className="container py-8">
          <p className="text-sm text-neutral-400">
            Created by Aldo R. Robles.{' '}
            <a
              className="underline hover:text-neutral-200"
              href="https://github.com/roblesdotdev/remix-on-vercel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
            .
          </p>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
