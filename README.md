# use-markdown

A React hook to load Markdown files.

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

In `/demo` there is a Create React App which loads the hook locally:

```js
// demo/package.json
"use-markdown": "../use-markdown-0.1.0.tgz"
```

To package the hook locally please issue `npm pack` in the hook's root folder.
