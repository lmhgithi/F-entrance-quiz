import React, { Component } from 'react';
import AddStudent from './AddStudent';
import '../style/students.scss';

class Students extends Component {
  state = {
    students: [],
  };

  componentDidMount = () => {
    this.getStudents();
  };

  getStudents = () => {
    URL = 'http://localhost:8080/students';
    fetch(URL, {
      method: 'GET',
    })
      .then((Response) => {
        if (Response.status === 200) {
          return Response.json();
        } else {
          Promise.reject();
        }
      })
      .then((jsonData) => {
        this.setState({
          students: jsonData,
        });
      });
  }

  render() {
    return (
      <div className="students-list">
        <h2>学员列表</h2>
        <div className="students-list-content">
          {Object.keys(this.state.students).map((key) => (
            <p className="student" key={key}>
              {`${this.state.students[key].num}. ${this.state.students[key].name}`}
            </p>
          ))}
          <AddStudent
          getStudents={() => this.getStudents()}
          />
        </div>
      </div>
    );
  }
}

export default Students;
