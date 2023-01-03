### Set up Project

- `npm run build`: bundle js file into bundle.js each time when you change .js file
- `npm run watch` : auto keep update bundle result after each modify of .js file.

### React

1. construct an index.html, have
   - bundle.js script
   - root element where to render React component
2. Dependencies

   ```jsx
   npm i react react-dom react-router-dom
   ```

3. construct an index.js, to render React DOM

### Redux

1. install dependencies

   ```jsx
   npm i @reduxjs/toolkit react-redux
   ```

2. store folder store all files about redux
   - index.js : define store
   - slices folder: includes all definition of slice
3. Connect redux to react app in index.js (root)

### Webpack

1. install dev dependencies

   ```jsx
   npm i -D webpack webpack-cli @babel/core  @babel/preset-env @babel/preset-react babel-loader
   css-loader style-loader
   ```

2. create webpack.config.js in root directory

   - entry: the entry point of index.js
   - output: where to output the bundle result
   - add rule to load js file, css file

   ```jsx
   module.exports = {
     mode: "development",
     entry: ["./index.js"],
     output: {
       path: __dirname,
       filename: "./public/dist/bundle.js",
     },
     devtool: "source-map",
     module: {
       rules: [
         {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: "babel-loader",
           options: {
             presets: ["@babel/preset-env", "@babel/preset-react"],
           },
         },
         {
           test: /\.css$/,
           use: ["style-loader", "css-loader"],
         },
       ],
     },
   };
   ```

### ESLint

- create .eslintrc.json at root directory
- add extent to ignore component unused warning

```jsx
{ "extends": "react-app" }
```
