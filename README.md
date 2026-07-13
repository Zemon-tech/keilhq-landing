This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 📝 Keystatic CMS Integration (GitHub Storage)

This project has Keystatic CMS integrated at `/keystatic` configured with **GitHub Storage Mode** targeting `Zemon-tech/keilhq-landing`.

### 🔑 Environment Variables Required

You must configure the following environment variables in your production environment (e.g., Cloudflare Pages):

| Variable | Description | Example |
| :--- | :--- | :--- |
| `KEYSTATIC_GITHUB_CLIENT_ID` | Client ID of your GitHub App | `Iv1.xxxxxxxxxxxx` |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | Client Secret of your GitHub App | `xxxxxx...xxxxxx` |
| `KEYSTATIC_SECRET` | Secret string for session cookie signing | `a_long_random_hash_string` |

### 🛠️ GitHub App Configuration

To connect Keystatic to your GitHub repository:

1. **Create a GitHub App** on your GitHub account/org:
   - Go to **Settings > Developer Settings > GitHub Apps > New GitHub App**.
   - **GitHub App name:** `KeilHQ Landing CMS` (or any unique name).
   - **Homepage URL:** `https://keilhq.com`
   - **Callback URL:** `https://keilhq.com/api/keystatic/github/callback` (For local development, you can use `http://localhost:3000/api/keystatic/github/callback`).
   - **Expire user authorization tokens:** Checked.
   - **Request user authorization (OAuth) during installation:** Checked.

2. **Set Repository Permissions:**
   - Under **Permissions > Repository permissions**:
     - **Contents:** Read & write (Required to commit changes)
     - **Pull Requests:** Read & write (Optional, only if using PR workflows)
     - **Metadata:** Read-only (Default required)

3. **Install the App:**
   - Install the app on your account and select the **`Zemon-tech/keilhq-landing`** repository.
   - Copy the **Client ID** and generate a new **Client Secret**.

### 🌐 Handling Preview Deployments (Staging / PR Reviews)

Because GitHub OAuth Apps only support a single Redirect Callback URL, preview URLs (like those generated dynamically by Cloudflare Pages on pull requests) will fail authentication if they do not match the Callback URL.

To handle preview deployments, you have two options:
* **Option A (Recommended):** Setup a **separate Staging GitHub App** configured specifically with the callback URL of your staging or main preview branch (e.g. `https://preview.keilhq.com/api/keystatic/github/callback`), and configure those environment variables on Cloudflare's preview branch settings.
* **Option B:** For local development and temporary preview checks, set the Callback URL in your primary GitHub App configuration to `http://localhost:3000/api/keystatic/github/callback` or the temporary preview domain.

### 4. Deploying on Cloudflare Pages

- Go to your Cloudflare Dashboard.
- Navigate to **Workers & Pages > keilhq-landing > Settings > Environment variables**.
- Add the three required variables: `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, and `KEYSTATIC_SECRET` under both the **Production** and **Preview** environment configurations.
- Run a new deployment using:
  ```bash
  pnpm run deploy
  ```

