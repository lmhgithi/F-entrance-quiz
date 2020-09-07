import React, { Component } from 'react';
import './App.scss';
import StudentsList from './studentsList';
import StudentsGroup from './studentsGroup';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <body>
          <StudentsGroup />
          <StudentsList />
        </body>
      </div>
    );
  }
}

export default App;
