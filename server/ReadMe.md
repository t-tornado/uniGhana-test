# SERVER APP

This is a Node server that serves endpoints to the UniGhana test client app.

## Setup

Install dependencies with

```
yarn
```

Add a **.env** to the root of the app with the ff variables:

```bash
PORT=<port_number>
DATABASE_URL=<mongo_database_url>
```

The Database url will be shared with you via mail.

## Running Server

Ensure that .env variables are set.
Run the dev command to start the server:

```
yarn dev
```
