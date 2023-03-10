const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
// Add additional requirements here

// If you're using dotenv
require("dotenv").config();

// Export a configuration object
// See [Wepack's documentation](https://webpack.js.org/configuration/) for additional ideas of how to
// customize your build beyond what Angular provides.
module.exports = {
  plugins: [
    new Dotenv(),
    new webpack.EnvironmentPlugin({
      // Insert the keys to your environment variables here.
      NODE_ENV: process.env.NODE_ENV,
      MOVIEDB_API: process.env.MOVIEDB_API,
      MOVIEDB_API_KEY: process.env.MOVIEDB_API_KEY,
    }),
  ],
};
