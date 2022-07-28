# Starter Webpack

A simple lightweight starter web project using the following frameworks.

- `Alpine.js`
- `Tailwind CSS`
- `TypeScript`
- `Webpack`

## Development server

Run `npm run start` for a development server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

---

## Build

Run one of the following scripts to build the project:

> production: `npm run build`

> development: `npm run build:dev` 

The build artifacts will be stored in the `dist` folder.

---

## Deploy

The starter project is configured to check automatically for dependency updates via `Dependabot`* and it's a piece of :cake: to deploy this app to `Vercel`.

Import your project directly from `Git` and set the following:

> Settings > General > Build & Development Settings > set `OUTPUT DIRECTORY` to `dist`

To skip preview builds for PR's raised by `Dependabot`:

> Settings > Git > Ignore Build Step > set `COMMAND` to `bash vercel.sh`


**Dependabot will check monthly for updates and raises a pull request to update the dependencies.*
