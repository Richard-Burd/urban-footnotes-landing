This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This project uses pnpm. If pnpm is not available yet, enable Corepack once:

```bash
corepack enable
corepack prepare pnpm@10.33.4 --activate
```

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stripe sandbox vs. live mode

The app currently reads Stripe keys with a `SANDBOX_` prefix:

- `SANDBOX_STRIPE_SECRET_KEY`
- `SANDBOX_STRIPE_WEBHOOK_SECRET`
- `SANDBOX_STRIPE_PRICE_PROPERTY_MILES`
- `SANDBOX_STRIPE_PRICE_PROPERTY_KILOMETERS`
- `SANDBOX_STRIPE_PRICE_PROPERTY_KILOMETERS_AND_MILES`

To switch to live mode, update the three files below to remove the `SANDBOX_` prefix:

- `lib/stripeServer.js` — `SANDBOX_STRIPE_SECRET_KEY` → `STRIPE_SECRET_KEY`
- `pages/api/stripe/webhook.js` — `SANDBOX_STRIPE_WEBHOOK_SECRET` → `STRIPE_WEBHOOK_SECRET`
- `lib/orderProducts.js` — `SANDBOX_${product.priceEnvVar}` → `product.priceEnvVar`

Both sets of secrets (`SANDBOX_*` and `STRIPE_*`) can be uploaded to the server at any time. The code change above is all that's needed to switch modes.

## Order logo submissions

Logo and source files are collected after payment rather than uploaded through
the order form. Set `LOGO_SUBMISSION_URL` to the file-request or form URL that
customers should receive on the success page and in their confirmation email.
The optional `{ORDER_ID}` token is replaced with the customer's order ID.

When `LOGO_SUBMISSION_URL` is not configured, the link falls back to an email
addressed to `contact@urbanfootnotes.com` with the order ID in the subject.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

.
