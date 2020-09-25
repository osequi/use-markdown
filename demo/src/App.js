import React from "react";

import useMarkdown from "@osequi/use-markdown";
import readme from "./README.md";

const App = () => {
  const { markdown } = useMarkdown(readme);
  const html = <div dangerouslySetInnerHTML={{ __html: markdown }} />;

  return <>{html}</>;
};

export default App;
