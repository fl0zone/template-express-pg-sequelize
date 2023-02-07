<p align="center">
  <a href="http://fl0.com/" target="blank">
    <svg width="177.17" height="75" viewBox="0 0 58.363 24.706"><g fill="#fff"><path d="M3219.484 1816.628h-6v-1.85q0-1.027.921-1.027h5.079v-4.109h-6.852a3.293 3.293 0 0 0-2.453 1.011 3.411 3.411 0 0 0-.988 2.483v3.493h-3.644v4.109h3.644v12.876h4.293v-12.877h6z" transform="translate(-3205.547 -1809.326)"></path><path d="M3392.016 1833.468c-2.129 0-3.458-.563-4.394-1.69s-1.405-2.964-1.405-5.515V1813.5h-4.152v-4.161h8.446v16.21a4.946 4.946 0 0 0 .637 2.869 2.469 2.469 0 0 0 2.127.864h3.593v4.186z" transform="translate(-3364.87 -1809.054)"></path><path d="M3558.578 1812.313h2.069V1809h-2.69a3.568 3.568 0 0 0-3.516 3.516V1818.474a.982.982 0 0 1-.828.969H3553v3.316h.613a.982.982 0 0 1 .828.969V1829.686a3.567 3.567 0 0 0 3.516 3.516h2.69v-3.31h-2.069a.879.879 0 0 1-.827-.877v-5.638a2.379 2.379 0 0 1 0-4.551v-5.638a.879.879 0 0 1 .827-.875z" transform="translate(-3519.181 -1808.75)" style="stroke: rgb(255, 255, 255); stroke-width: 0.5px;"></path><path d="M3615.364 1867.912 3623.5 1853h-4.461l-8.06 14.912z" transform="translate(-3571.236 -1848.256)" fill="#5ef9f0"></path><path d="M3718.069 1812.313H3716V1809h2.689a3.568 3.568 0 0 1 3.516 3.516V1818.474a.982.982 0 0 0 .828.969h.612v3.316h-.612a.983.983 0 0 0-.828.969V1829.686a3.568 3.568 0 0 1-3.516 3.516H3716v-3.31h2.069a.879.879 0 0 0 .828-.877v-5.638a2.379 2.379 0 0 0 0-4.551v-5.638a.879.879 0 0 0-.828-.875z" transform="translate(-3665.535 -1808.75)" style="stroke: rgb(255, 255, 255); stroke-width: 0.5px;"></path></g></svg>
</a>
</p>

<h2 align="center">Express + Sequelize + Postgres Starter Pack</h2>
<p align="center">Backend engineering, supercharged.</p>

## Overview

Use this repository to get up and running on FL0 with the following stack:

<table>
<tr>
  <th>Language</th>
  <td>Javascript</td>
</tr>
<tr>
  <th>Framework</th>
  <td>None</td>
</tr>
<tr>
  <th>Router</th>
  <td>Express</td>
</tr>
<tr>
  <th>ORM</th>
  <td>Sequelize</td>
</tr>
<tr>
  <th>Database</th>
  <td>Postgres</td>
</tr>
</table>

## Getting Started
We recommend using the provided Docker Compose configuration for local development. Our Docker configuration includes:
1. Automatically create both database and app server easily
2. Hot-reloading of code for local development
3. Production-ready minified image
4. Database admin interface using [Cloudbeaver](https://hub.docker.com/r/dbeaver/cloudbeaver)

However, you can still use this repo without Docker! See the instructions below.

### Using Docker
1. `docker compose up` (initial build can take a couple of mins)
2. That's it! Visit http://localhost:8080 to see your app running

### Without Docker
If you don't want to use Docker, make sure you have a Postgres database that you can connect to. 
1. `npm install`
2. Copy the provided `.env.example` file and rename it to `.env`
2. `npm run start:dev`
3. Visit http://localhost:8080 to see your app running

## Deploying to FL0
Checkout our [Getting Started Guide](https://docs.fl0.com) in the FL0 documentation!

## Using the Database Admin Interface
If you use our Docker Compose file you have access to a local instance of Cloudbeaver. To access it, navigate to:

1. Navigate to http://localhost:8081
2. Follow the setup wizard to create your admin account
3. Add a new connection using the PostgreSQL driver and the URL below

`jdbc:postgresql://db:5432/fl0-starter-db?user=admin&password=admin`

## Questions
If you have any questions about FL0 or this template codebase please head on over to our [Discord channel](https://discord.gg/AmmVTt9Jrw).

## Issues
Any issues or feature requests can be raised on the [Issues page](https://github.com/fl0zone/template-express-pg-sequelize/issues) of this repo.

## License

