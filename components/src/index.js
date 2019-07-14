import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import Approvalcard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <Approvalcard>
        <CommentDetail
          author="Sum"
          timeAgo="Today at 4:45PM"
          content="Nice blog!!"
          avatar={faker.image.avatar()}
        />
      </Approvalcard>
      <Approvalcard>
        <CommentDetail
          author="Ryo"
          timeAgo="Today at 11:45AM"
          content="Soso blog!"
          avatar={faker.image.avatar()}
        />
      </Approvalcard>
      <Approvalcard>
        <CommentDetail
          author="Kim"
          timeAgo="Yesterday at 6:13AM"
          content="Looks nice!"
          avatar={faker.image.avatar()}
        />
      </Approvalcard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
