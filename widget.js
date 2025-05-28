import React from "react";
import ReactDOM from "react-dom/client";
import MyWidget from "./components/MyWidget";

(function () {
  if (document.getElementById("webopt-widget-root")) return;

  const container = document.createElement("div");
  container.id = "webopt-widget-root";
  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);
  root.render(<MyWidget />);
})();
