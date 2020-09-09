import React, { Component } from 'react';
import Groups from './Groups';
import Students from './Students';
import '../style/App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <body>
          <Groups />
          <Students />
        </body>
      </div>
    );
  }
}

export default App;
