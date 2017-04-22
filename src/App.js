import React, { Component } from 'react';
import { Panel, Row, Col, Grid } from 'react-bootstrap';

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
      <div>{entry({author: "test", message: "hello world"})}</div>
    );
  }
}

export default App;
