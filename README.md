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