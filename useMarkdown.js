import React, { useState, useEffect } from "react";
import marked from "marked";

const useMarkdown = (file) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setMarkdown(marked(text));
      });
  }, [file]);

  return { markdown: markdown };
};

export default useMarkdown;
