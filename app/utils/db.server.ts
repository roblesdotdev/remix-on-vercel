import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { PrismaClient } from '@prisma/client'
import { singleton } from './singleton.server'

const libsql = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

export const db = singleton('prisma', () => {
  const adapter = new PrismaLibSQL(libsql)
  return new PrismaClient({ adapter })
})
