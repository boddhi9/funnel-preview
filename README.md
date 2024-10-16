# Funnels Preview

## Testing Strategy

A few notes on testing:

While unit tests are important for simple UI components like `ButtonBlock` or `TextBlock`, it might not be necessary to write extensive tests to ensure a button renders with correct styles, children, and props. In such cases, **Storybook** could be a better choice for visual component testing. By using **Chromatic**, we could incorporate snapshot testing, interactive tests, component versioning, and even **Playwright** integration to cover the critical aspects of these components.

However, for more complex components like `FunnelPreview`, **integration tests** are essential. As [Kent C. Dodds](https://kentcdodds.com/blog/write-tests) advocates: "Write tests, not too many, mostly integration."

## Getting Started

First, install the project dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Available Scripts

Here are the main scripts available in this project:

### `npm run dev`

Runs the development server.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the app for production. The output is optimized and ready to be deployed.\
This command creates an optimized production build in the `.next` folder.

### `npm run start`

Starts the Next.js production server.

### `npm run lint`

Runs ESLint to check for any code formatting or syntax issues.\
This project is configured with `eslint-config-next`, which ensures you follow best practices for a Next.js app.

### `npm run lint-fix`

Runs ESLint to check for issues and automatically fix them where possible.

### `npm run test`

Runs Jest in watch mode, running all your tests and re-running them on file changes.\
Make sure your components are working correctly with the test suite.

### `npm run format:write`

Uses Prettier to format the code in your `app`, `lib`, and `components` folders.\
Run this to format your code according to the Prettier configuration.

### `npm run format:check`

Checks the code formatting using Prettier in the specified folders without making changes.\
This command helps ensure that the code is consistently formatted across the project.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
