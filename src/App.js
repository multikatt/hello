import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

function header(author) {
  return (
    <div>
      <p>{author}</p>
      <p className="text-right">date</p>
    </div>
  );
}

function entry(props) {
  return (
    <Panel header={header(props.author)}>
      <div>{props.message}</div>
    </Panel>
  );
}

class App extends Component {
  render() {
    return (
      <div>{entry({author: "test", message: "helloes"})}</div>
    );
  }
}

export default App;
