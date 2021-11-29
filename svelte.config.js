const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
  }),
  tsconfigFile: './tsconfig.json',
  "transform": {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        "preprocess": "/some/path/to/svelte.config.js"
      }
    ],
    "^.+\\.ts$": "ts-jest"
  },
  "moduleFileExtensions": [
    "js",
    "ts",
    "svelte"
  ]

};