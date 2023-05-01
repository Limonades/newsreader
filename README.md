## NewsReader App React + Next.js + Typescript

Install packages:

```bash
npm install
```

Scripts:

```bash
// to start in development mode 
npm run dev

// to build the application for production usage
npm run build

// to start in dev mode with ts checks
npm run dev:ts

// to start ts check watch
npm run ts-lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Description

- Fetch data from the external API
- News list page
- News detail pages

### Features

- For the list and detail pages, used Incremental Static Regeneration (ISR) for static content generation and automatic content updating.
- `src/services/news` NewsService - to work with the API.
- `src/components/Meta` component - to manage pages metadata.
- `src/components/Layout` component - as a main reused container.
- Added a watch mode TS check during development.
- Eslint friendly.
- Additional libs - Axios.
