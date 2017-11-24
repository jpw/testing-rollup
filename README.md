# testing-rollup
A little demo of bundling source ES6 JavaScript for consumption by ES5 &amp; ES6 clients.

## rationale 

1.  We know we want to be writing ES6-style modules for the benefits of future-proofing, and our own sanity...
2.  Whilst writing lovely modules, we still need to bundle/concat our ES6 into one file (until we can use HTTP2 everywhere), as we do not want one HTTP request per module file for performance reasons.
3.  While [ES6-style native support is getting good](https://caniuse.com/#feat=es6-module) (Edge, Chrome, Safari, a lot of mobiles), it seems compelling to have two output bundles—native modules for the newer clients and ES5 transpiled for the older clients. These two bundles would loaded via `<script type="module"...>` & `<script nomodule...>` respectively, but _only one bundle would be loaded by any browser_.
4.  We can use 'rollup.js' with the `--f es` output format option to bundle then JS files and "[keep the bundle as an ES module file](https://rollupjs.org/#file-o-output-file-)".
5.  We then need something to transpile that ES6 bundle down to ES5, and for that we're using 'google-closure-compiler-js' which converts from ES6 to ES5 by default.
6.  The resultant npm script entry in our `package.json` looks like this: `"build": "./node_modules/rollup/bin/rollup resources/index.js --o public/bundle-es6.js --f es && ./node_modules/google-closure-compiler-js/cmd.js public/bundle-es6.js > public/bundle-es5.js"`

## to use

Clone this repo then `npm i`

Build the assets; `npm run build`

Run the express server; `node index.js`

Look at `http://localhost:3000/`