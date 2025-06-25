import { z } from 'zod'

// Placeholder values
const envSchema = z.object({
  SOME_URL: z.string({ message: 'Invalid string' }).url({ message: 'Invalid url' }),
  SOME_STRING: z.string({ message: 'Invalid string' }),
})

const result = envSchema.safeParse(process.env)

if (!result.success) {
  console.error('ERROR - Invalid enviroment variables')
  console.table(result.error.issues)
  process.exit(1)
}

export const env = result.data
