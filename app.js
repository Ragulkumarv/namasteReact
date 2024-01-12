import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("h1", { id: "head" }, "hello Welcome Ragul");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
