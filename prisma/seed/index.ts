import { cleanDatabase, dumbIssues } from './utils'
import { db } from '~/utils/db.server'

async function seed() {
  console.time('Clean database')
  await cleanDatabase()
  console.timeEnd('Clean database')

  console.time('Insert fake issues')
  await db.issue.createMany({
    data: dumbIssues,
  })
  console.timeEnd('Insert fake issues')
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
