import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sum" />
      <CommentDetail author="Ryo" />
      <CommentDetail author="Kim" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
