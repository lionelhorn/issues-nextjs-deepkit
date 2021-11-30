When opening new shell, start with
```
export NODE_OPTIONS=--openssl-legacy-provider
```
See https://github.com/webpack/webpack/issues/14532

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