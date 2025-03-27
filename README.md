To reproduce the issue:

- build both apps for production
- run both apps simultaneously with `pnpm preview` (for 3.16.1 explicitly with `-p 3001`)
- open browser DevTools for both, click on a button in each of them and observe the difference in response payload

During dev the response format differs too (slightly), but the most important one is missing data in production.
