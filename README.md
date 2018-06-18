## `arc-redux-ssr-api calls`
## Setup

### 1. Install dependencies

```sh
$ npm install
```
### 2. Run json-server

```sh
$ json-server --watch src/db.json --port 3002
```

### 3. Run the app

```sh
$ npm run dev
```

It will start the development server with [HMR](https://webpack.github.io/docs/hot-module-replacement) on top of it.

> [http://localhost:3000](http://localhost:3000) — Development server<br>
> [http://localhost:3001](http://localhost:3001) — Webpack assets server (for `redux-ssr` only)<br>
> [http://localhost:3002](http://localhost:3002) — Json-server<br>

Now you can open [http://localhost:3000](http://localhost:3000) in browser and start developing.
