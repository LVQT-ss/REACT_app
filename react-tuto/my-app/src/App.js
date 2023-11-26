import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Xin chào, {this.props.name}!</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="John" />
        <Welcome name="Jane" />
        <Welcome name="Bob" />
      </div>
    );
  }
}

export default App;