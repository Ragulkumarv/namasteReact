import React from "react";
import ReactDOM from "react-dom/client";

const Title = <h1 className="title">Hello this is React . Welcome !!</h1>;
const JSXHeader = () => (
  <h2 className="title">Hello this is second Title . Welcome !!</h2>
);

const FuncComp = () => {
  return (
    <div className="container">
      {Title}
      <JSXHeader />
      <h1 className="heading">component composition</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FuncComp />);
