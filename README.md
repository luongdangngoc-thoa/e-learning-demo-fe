# E-learning system   

## Getting Started

First, run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase

We are using Supabase as a database for the Authentication/Authorization
Please follow these scripts for working with Supabase

```bash
"db-local:start": "npx supabase start",
"db-local:stop": "npx supabase stop",
"db-local:reset": "npx supabase db reset",
"db-local:seed": "npx supabase db seed",
"db-cloud:link": "npx supabase db link",
"db-cloud:reset": "npx supabase db reset --linked",
"db-cloud:push": "npx supabase db push"

# Usage
pnpm db-local:start
# or
pnpm db-local:stop
...
```

### Migration

Some Supabase commands cannot be configured into scripts, you must run them manually
Docs: [Supabase migration](https://supabase.com/docs/reference/cli/supabase-migration-up)

```bash
supabase migration new <file_name> # Creates a new migration file locally.
supabase migration squash # Squashes local schema migrations to a single migration file.
supabase migration up # Apply Pending Migrations To Local Database
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

We are using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) for the deployment platform.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
