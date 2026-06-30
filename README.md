# davincif

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Build docker image

```sh
# after building the project run
docker build --network=host -t ldavincif/ldavincif-portal .

# then, to run it
docker run -d -p 0.0.0.0:8080:8080/tcp --name ldavincif-portal-1 ldavincif/ldavincif-portal
```

```sh
# to stop and remove all running containers
sudo docker stop $(sudo docker ps -aq) && sudo docker rm $(sudo docker ps -aq)

# or all together
sudo docker stop $(sudo docker ps -aq) && sudo docker rm $(sudo docker ps -aq) && sudo docker run -d -p 0.0.0.0:8080:8080/tcp --name ldavincif-portal-1 ldavincif/ldavincif-portal
```

### Kubernetes

NOT TESTED!
