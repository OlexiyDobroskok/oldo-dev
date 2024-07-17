import { z } from 'zod';

const clientEnvSchema = z.object({
  NEXT_PUBLIC_LINKEDIN_PROFILE_LINK: z.string().url(),
  NEXT_PUBLIC_UPWORK_PROFILE_LINK: z.string().url(),
  NEXT_PUBLIC_FIVERR_PROFILE_LINK: z.string().url(),
  NEXT_PUBLIC_GITHUB_PROFILE_LINK: z.string().url(),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ClientEnv {}
  }
}

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_LINKEDIN_PROFILE_LINK:
    process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_LINK,
  NEXT_PUBLIC_UPWORK_PROFILE_LINK: process.env.NEXT_PUBLIC_UPWORK_PROFILE_LINK,
  NEXT_PUBLIC_FIVERR_PROFILE_LINK: process.env.NEXT_PUBLIC_FIVERR_PROFILE_LINK,
  NEXT_PUBLIC_GITHUB_PROFILE_LINK: process.env.NEXT_PUBLIC_GITHUB_PROFILE_LINK,
});
