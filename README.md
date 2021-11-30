When opening new shell, start with
```
export NODE_OPTIONS=--openssl-legacy-provider
```
See https://github.com/webpack/webpack/issues/14532

### Working with NextJs 11
```
export NODE_OPTIONS=--openssl-legacy-provider
git checkout nextjs-11
yarn install
next build
```

````text
info  - Compiled successfully
info  - Collecting page data
info  - Generating static pages (3/3)
info  - Finalizing page optimization

Page                                Size     First Load JS
┌ ○ /                               34.6 kB         102 kB
├   └ css/a16e9e1ae10d4a5dd269.css  736 B
├   /_app                           0 B              67 kB
├ ○ /404                            194 B          67.2 kB
└ λ /api/hello                      0 B              67 kB
+ First Load JS shared by all       67 kB
  ├ chunks/framework.b97a0e.js      42 kB
  ├ chunks/main.c4f254.js           23.6 kB
  ├ chunks/pages/_app.d4f4e0.js     556 B
  ├ chunks/webpack.90a60b.js        838 B
  └ css/120f2e2270820d49a21f.css    209 B

````
### Not working with NextJs 12
```
export NODE_OPTIONS=--openssl-legacy-provider
git checkout nextjs-12
yarn install
next build
```

````text
info  - Creating an optimized production build  
info  - Compiled successfully

> Build error occurred
Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\PROG\Issues\issues-nextjs-deepkit\node_modules\@deepkit\type\dist\esm\src\types' imported from C:\PROG\Issues\issues-nextjs-deepkit\node_modules\@deepkit
\type\dist\esm\index.js
    at new NodeError (node:internal/errors:371:5)
    at finalizeResolution (node:internal/modules/esm/resolve:394:11)
    at moduleResolve (node:internal/modules/esm/resolve:915:10)
    at defaultResolve (node:internal/modules/esm/resolve:1005:11)
    at ESMLoader.resolve (node:internal/modules/esm/loader:475:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:245:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:79:40)
    at link (node:internal/modules/esm/module_job:78:36) {
  type: 'Error',
  code: 'ERR_MODULE_NOT_FOUND'
}
````