# TailwindCSS Storybook React Starter

This project is a component development environment that integrates the latest version of Storybook (6.2) with Tailwind (via `@storybook/addon-postcss`), TailwindCSS JIT compilation, and Webpack 5.

## Why

[Storybook](https://storybook.js.org/) is a tool for developing UI components in isolation using React (or any other UI framework supported by Storybook). [Tailwind](https://tailwindcss.com/) is a utility-first CSS framework that generates classes that can be composed to implement any design. Together, these libraries create a robust development environment that enables developers to rapidly implement UI components, no matter the complexity, in isolation with the advantage of atomic composability via Tailwind's utility classes.

## Features

- Support for the latest Storybook features
- Sub-second updates with [TailwindCSS JIT](https://github.com/tailwindlabs/tailwindcss-jit)
- [Tailwind IntelliSense](https://tailwindcss.com/docs/intellisense) support
- CSS nesting rules
- Automatic Storybook deployment to [GitHub pages](https://davidzzheng.github.io/tailwind-storybook/) via [GitHub Actions](.github/workflows/deploy_storybook.yml)

## Setup

```
> yarn install
> yarn storybook
```

## What's Next?

- Extend the base Tailwind configuration to your liking
- Build & publish your components with the bundler of your choice
- Add a testing framework
- Implement a CI/CD pipeline with tools like [Chromatic](https://www.chromatic.com/)

## Resources

- [TailwindCSS](https://tailwindcss.com)
- [TailwindCSS JIT](https://github.com/tailwindlabs/tailwindcss-jit)
- [Storybook](https://storybook.js.org)
