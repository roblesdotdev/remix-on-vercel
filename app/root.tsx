import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { type MetaFunction } from '@vercel/remix'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix on Vercel' },
    { name: 'description', content: 'Welcome to Remix on Vercel!' },
  ]
}

export const config = { runtime: 'edge' }

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
