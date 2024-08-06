# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Useful resources

- icons8.com

## Animated hamburger icons

- https://hamburger-react.netlify.app/
- npm install hamburger-react
  import { Sling as Hamburger } from "hamburger-react";
- Properties & examples
  size={} duration={0.8} distance="lg" color="#4FD1C5" easing="ease-in" rounded label="Show menu" hideOutline={false}

## react-burger-menu

- https://www.npmjs.com/package/@katasonovyp/react-burger-menu
  npm install react-burger-menu --save
  import { slide as Menu } from 'react-burger-menu'
  for properties use link above

## Gallery - Material Tailwind

- https://www.material-tailwind.com/docs/react/gallery
- npm i @material-tailwind/react
- TailwindCSS Configurations (see on webpage)

## Card

- https://flowbite.com/docs/components/card/
- E-commerce card #

## accordion (mobile)

- npm install @heroicons/react (for arrows)
