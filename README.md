# Storybook w/ Tailwind

This is an experimental development environment that leverages the next version of Storybook (6.2) with Tailwind (via `@storybook/addon-postcss`), TailwindCSS JIT compilation, and Webpack 5.

## Why

[Storybook](https://storybook.js.org/) is a tool for developing UI components in isolation using React. [Tailwind](https://tailwindcss.com/) is a utility-first CSS framework that generates classes that can be composed to implement any design. Together, these libraries can create a robust development environment that enables engineers to rapidly implement UI components, no matter the complexity, in isolation with the advantage of low-level composability via Tailwind's utility classes.

## Setup

1. `yarn`
2. `yarn storybook`
3. http://localhost:6006

# Other stuff

## Features

- Storybook 6.2 with PostCSS 8 & Webpack 5 support
- [TailwindCSS JIT](https://github.com/tailwindlabs/tailwindcss-jit)
- [Tailwind IntelliSense](https://tailwindcss.com/docs/intellisense)
- Purgeable CSS classes

## Resources

- https://tailwindcss.com/
- https://github.com/aniftyco/awesome-tailwindcss
