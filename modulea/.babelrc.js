module.exports = {
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ],
  "presets": [
    [
      "@babel/preset-env", {
        "targets": {
          "browsers": ["> 1%"]
        }
      }
    ],
  ]
}
