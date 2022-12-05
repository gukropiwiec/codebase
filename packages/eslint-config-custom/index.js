module.exports = {
  root: true,
  overrides: [
    {
      files: [
        "*.ts"
      ],
      extends: [
        "next",
        "turbo",
        "prettier",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
      rules: {
        "@next/next/no-html-link-for-pages": "off",
        "react/jsx-key": "off",
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
      },
    },
    {
      files: [
        "*.html"
      ],
      extends: [
        "plugin:@angular-eslint/template/recommended"
      ]
    }
  ]
};
