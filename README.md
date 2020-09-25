# use-markdown

A React hook to load Markdown files.

## Features

- Loads a markdown file then parses with `marked`.
- Returns the parsed markdown.

## Demo

- https://use-markdown-demo.vercel.app

## Install

```sh
# Using yarn
yarn add @osequi/use-markdown

# or, using npm
npm i @osequi/use-markdown
```

## Usage

```js
// demo/src/App.js
import useMarkdown from "use-markdown";
import readme from "./README.md";

const App = () => {
  const { markdown } = useMarkdown(readme);
  const html = <div dangerouslySetInnerHTML={{ __html: markdown }} />;

  return <>{html}</>;
};
```

## Test

In `/demo` there is a Create React App.

## Changelog

Please check [CHANGELOG.md](CHANGELOG.md).

Generated with [Unleash](https://github.com/Netflix/unleash) using [Conventional changelog](https://github.com/conventional-changelog/conventional-changelog) and [Semantic versioning](https://semver.org/).
