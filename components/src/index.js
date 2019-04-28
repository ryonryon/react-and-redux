import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sum"
        timeAgo="Today at 4:45PM"
        content="Nice blog!!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Ryo"
        timeAgo="Today at 11:45AM"
        content="Soso blog!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Kim"
        timeAgo="Yesterday at 6:13AM"
        content="Looks nice!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
