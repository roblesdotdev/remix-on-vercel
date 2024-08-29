import { db } from '~/utils/db.server'

export async function cleanDatabase() {
  try {
    await db.issue.deleteMany()
  } catch (error) {
    console.error('Error cleaning up database:', error)
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
