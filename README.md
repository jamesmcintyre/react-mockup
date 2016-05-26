# Upthere Mockup using React/Webpack/ES6/Babel

A starter using react, webpack, babel, es2015 & sass.

Compiles all the scripts & styles from `src` path to `dist`. The kit generates source maps by default in development mode.

##Installation (Skip to "Usage" if only wanting to run/view page!)

I have already compiled a build so unless you want to run the dev environment you can likely skip this step below, see "Usage" below.

```bash
    $ npm install
```

##Usage

I have run the build so if you have a simple http server like "http-server" or "serve" installed globally than you can run it in the root where "index.html" lives (it then points to the "/build" folder for minified js/css assets).

```bash
    $ http-server
```
or
```bash
    $ serve
```

Or if you want to run the dev toolchain then you can run using webpack dev server & watch with hot-reload,

```bash
    $ npm start
```

To build on development mode, generates a minified version with source map.

```bash
    $ npm run build
```

To build on production mode

```bash
    $ NODE_ENV=production npm run build
```

Listens at **http://localhost:8080**
