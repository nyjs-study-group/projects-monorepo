
module.exports = {
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-namespace-from",
    ["@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: '^2.0.0',
        targets: ">= 0.5%, not dead, node 12",
        useBuiltIns: 'entry'
      }
    ]
  ],

};
