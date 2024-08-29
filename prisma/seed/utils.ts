import { db } from '~/utils/db.server'

export async function cleanDatabase() {
  const tables = await db.$queryRaw<
    { name: string }[]
  >`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE '_prisma_migrations';`

  try {
    // Disable FK constraints to avoid relation conflicts during deletion
    await db.$executeRawUnsafe(`PRAGMA foreign_keys = OFF`)
    await db.$transaction([
      // Delete all rows from each table, preserving table structures
      ...tables.map(({ name }) =>
        db.$executeRawUnsafe(`DELETE from "${name}"`),
      ),
    ])
  } catch (error) {
    console.error('Error cleaning up database:', error)
  } finally {
    await db.$executeRawUnsafe(`PRAGMA foreign_keys = ON`)
  }
}

export const dumbIssues = [
  {
    title: 'Fix login authentication bug',
    description:
      'Users are unable to log in due to a recent change in the authentication logic. Need to investigate and resolve the issue.',
    author: 'roblesdotdev',
  },
  {
    title: 'Update documentation for API endpoints',
    description:
      'The API documentation is outdated and needs to be revised to include the new endpoints and parameters added in the latest release.',
    author: 'johndoe',
  },
  {
    title: 'Implement dark mode toggle',
    description:
      'Add a toggle switch in the settings to allow users to switch between light and dark modes for better accessibility and user experience.',
    author: 'maryjane',
  },
]
