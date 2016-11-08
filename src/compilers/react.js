import Compiler from "../compiler";
import React from "react";
import ReactDOMServer from "react-dom/server";

export default class ReactCompiler extends Compiler {
  compile({ data, page }) {
    const Component = require(page).default;

    let html = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Component, data)
    );

    html = `<!DOCTYPE html> ${html}`;

    return html;
  }
}
