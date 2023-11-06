# tuto Forest Admin

This is a tutorial that will guide you through the process of installing and setting up Forest Admin in your application.

https://docs.forestadmin.com/developer-guide-agents-nodejs/getting-started/quick-start

## Installation

To install the Forest Admin agent, run the following command:

```bash
pnpm install @forestadmin/agent @forestadmin/datasource-sql
```

## Initialization

In your `app.js` or `index.js` file, add the following code to initialize Forest Admin:

```js
require('dotenv').config();
const { createAgent } = require('@forestadmin/agent');
const { createSqlDataSource } = require('@forestadmin/datasource-sql');

// Create your Forest Admin agent
// This must be called BEFORE all other middleware on the app
createAgent({
  authSecret: process.env.FOREST_AUTH_SECRET,
  envSecret: process.env.FOREST_ENV_SECRET,
  isProduction: process.env.NODE_ENV === 'true',
})
// Create your SQL datasource
.addDataSource(createSqlDataSource(process.env.DATABASE_URL))
// Replace "myExpressApp" by your Express application
.mountOnExpress(myExpressApp)
.start();
```

If you prefer using TypeScript, you can use the following code in your `app.ts` or `index.ts` file:

```ts
import 'dotenv/config';
import { createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';

// Create your Forest Admin agent
// This must be called BEFORE all other middleware on the app
createAgent({
  authSecret: process.env.FOREST_AUTH_SECRET,
  envSecret: process.env.FOREST_ENV_SECRET,
  isProduction: process.env.NODE_ENV === 'true',
  typingsPath: './typings.ts',
  typingsMaxDepth: 5,
})
// Create your SQL datasource
.addDataSource(createSqlDataSource(process.env.DATABASE_URL))
// Replace "myExpressApp" by your Express application
.mountOnExpress(myExpressApp)
.start();
```

## Configuration

Create a `.env` file in the root directory of your project and add the following environment variables:

```
FOREST_ENV_SECRET=###
FOREST_AUTH_SECRET=###
DATABASE_URL=postgresql://your_username:your_password@localhost:5432/your_database
NODE_ENV=false
```

Make sure to replace the placeholders (`###`, `your_username`, `your_password`, and `your_database`) with the appropriate values for your setup.


Happy coding with Forest Admin!