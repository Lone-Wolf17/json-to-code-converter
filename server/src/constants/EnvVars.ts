import "dotenv/config";
/**
 * Environments variables declared here.
 */

/* eslint-disable node/no-process-env */

export default {
  NodeEnv: process.env.NODE_ENV ?? "",
  Port: process.env.PORT ?? 4000,
  OpenAIAPIKey: process.env.OPEN_AI_API_KEY!,
} as const;
