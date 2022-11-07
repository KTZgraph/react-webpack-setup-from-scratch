# react-webpack-setup-from-scratch

```sh
npm run dev
npm run build
```

https://www.youtube.com/watch?v=WDpxqopXd9U

# https://videopoint.pl/users/konto/show/VTWAPB_W

```sh
npm init -y

npm i react react-dom

npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader css-loader sass-loader sass webpack webpack-cli

npm i -D style-loader
npm i webpack-dev-server --save-dev
npm i node-sass --save-dev
npm install html-webpack-plugin --save-dev


npm i -D mini-css-extract-plugin
```

# https://www.robinwieruch.de/minimal-react-webpack-babel-setup/ (stare)

```sh

react-webpack-setup-from-scratch>npm install react-hot-loader --save-dev
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: react-webpack-setup-from-scratch@1.0.0
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^15.0.0 || ^16.0.0 || ^17.0.0 " from react-hot-loader@4.13.0
npm ERR! node_modules/react-hot-loader
npm ERR!   dev react-hot-loader@"*" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
```
