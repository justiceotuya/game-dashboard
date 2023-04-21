# Gaming Dashboard Monorepo

This is a monorepository consisting of a React client, an Express server, and a shared TypeScript module. The project is intended to provide a dashboard for gaming statistics and data.
## Getting Started

To get started with this project, follow these steps:

1. Clone this repository: `$ git clone https://github.com/justiceotuya/game-dashboard.git`
2. Navigate to the project directory: `$ cd game-dashboard`
3. Install the dependencies: `$ yarn install`
4. Start both server and client  `$ yarn dev` **OR**
5. Start the server: `$ yarn start:server`
6. Start the client: `$ yarn start:client`


The client and server will now be running at http://127.0.0.1:5173/ and http://localhost:8000 respectively.

## Project Structure

This project follows a monorepo structure, with the various packages located in the `packages` directory. The following packages are included:

- `@justiceotuya/gaming-dashboard-monorepo-client`: React client
- `@justiceotuya/gaming-dashboard-monorepo-server`: Express server
- `@justiceotuya/gaming-dashboard-monorepo-shared`: Shared TypeScript module

### Client

The client is built with React and uses Vite as the build tool. The following dependencies are included:

- `@heroicons/react`: Heroicons icon library
- `@tailwindcss/forms`: Tailwind CSS forms
- `@tanstack/react-query`: React Query for data fetching and caching
- `@tanstack/react-query-devtools`: React Query devtools for debugging
- `axios`: HTTP client
- `dayjs`: Lightweight date library
- `formik`: Form library
- `react`: React library
- `react-datepicker`: Datepicker component
- `react-dom`: React DOM library
- `react-error-boundary`: Error boundary component
- `react-hot-toast`: Toast library
- `react-modal`: Modal component
- `react-router-dom`: React Router for client-side routing
- `vite-plugin-svgr`: Vite plugin for using SVGs as React components
- `yup`: Object schema validation library

### Server

The server is built with Express and uses TypeScript. The following dependencies are included:

- `clone`: Object cloning library
- `cors`: CORS middleware
- `express`: Express library
- `json-server`: Fake REST API using JSON files

### Shared

The shared module contains TypeScript types and utility functions used by both the client and server.

## Available Scripts

In the project directory, you can run the following scripts:

### `yarn dev`

Runs the `dev` script for all packages. This starts both the client and server in development mode.

### `yarn install`

Runs the `install` script for all packages. This installs all dependencies for the project.

### `yarn build`

Runs the `build` script for all packages. This builds all packages.

### `yarn start:server`

Starts the server in production mode.

### `yarn start:client`

Starts the client in development mode.

### `yarn test`

Runs the tests for the client.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for details.
