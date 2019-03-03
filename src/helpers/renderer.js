import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";
import style from "./rendererStyle";

export default () => {
  const content = renderToString(<Home />);
  return `
    <html>
      <head>
        <title>SSR</title>
        <link rel='shortcut icon' type='image/x-icon' href="https://raw.githubusercontent.com/esausilva/react-starter-boilerplate-hmr/master/public/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
      </head>
      <style>
        ${style()}
      </style>
      <body>
        <div id="root">
          <div class="dimmed">
            <div class="loader"></div>
          </div>
        </div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
