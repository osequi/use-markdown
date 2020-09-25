import React from "react";

import useMarkdown from "../../useMarkdown";
import readme from "../README.md";

const App = () => {
  const { html } = useMarkdown(readme);

  return { html };
};

export default App;
