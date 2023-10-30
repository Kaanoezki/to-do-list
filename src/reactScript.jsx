//react testing

ReactDOM.render(<Gruss/>,document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

class Gruss extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(<Gruss />, document.getElementById('root'));

