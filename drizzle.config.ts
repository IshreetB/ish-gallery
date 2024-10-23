import { type Config } from "drizzle-kit";

import { env } from "~/env";

console.log("db url:", env.POSTGRES_URL);

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  tablesFilter: ["ish-gallery_*"],
} satisfies Config;
