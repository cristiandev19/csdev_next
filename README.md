# Web site

## next steps

- expand the skills section
- add a text editor

## Features

  - [x] [Nextjs](https://nextjs.org/)
  - [x] [TypeScript](https://www.typescriptlang.org/)
  - [x] [ESLint](https://eslint.org/)
  - [x] [Prettier](https://prettier.io/)
  - [x] [Tailwind CSS](https://tailwindcss.com/)
  - [x] [next-i18next](https://github.com/isaachinman/next-i18next)
  - [ ] [Jest](https://facebook.github.io/jest/)
  - [ ] [Docker](https://www.docker.com/)
  - [ ] [Storybook](https://storybook.js.org/)

## Architecture

For this project I used the atomic design pattern (here is my [documentation](https://github.com/csdev19/front-research/blob/main/sections/atomic-design.md)). So I will structure the code in the following way:

- Atoms
- Molecules
- Organisms
- Templates
- Pages

## Component structure

I made the component structure like:

```
project
└─── <component>
    │-  index.ts (required, the provider of the component utilities for the rest of the project)
    │- <component>.tsx (required component file)
    │- <component>.spec.ts (required, in the future)
    │- <component>.module.css (optional)
    │- <component>.types.ts (optional)
    │- <component>.constants.ts (optional)
```

## Notes

- https://notiz.dev/blog/floating-form-field-with-tailwindcss
- https://unicode.org/emoji/charts/full-emoji-list.html#1f468_200d_1f3eb

## Things that I want to implement

- Nextjs [built-is-css](https://nextjs.org/docs/basic-features/built-in-css-support)
- [JSS](https://cssinjs.org/?v=v10.9.1-alpha.2)

## Getting Started


First, install dependencyes:

```bash
npm i
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
