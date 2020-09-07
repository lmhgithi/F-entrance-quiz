import React, { Component } from 'react';

class AddStudent extends Component {
  state = {
    input: false,
    inputName: '',
  };
  handleSubmit = (event) => {
    if (event.keyCode == 13) {
      URL = `http://localhost:8080/student/${this.state.inputName}`;
      fetch(URL, {
        method: 'POST',
      })
        .then((Response) => {
          if (Response.status === 200) {
            this.props.refresh();
          } else {
            Promise.reject();
          }
        });

      this.setState({
        input: false,
        inputName: '',
      });
    }
  };

  handleClick = () => {
    this.setState({
      input: true,
    });
  };

  handleChange = () => {
      this.setState({
          inputName: event.target.value,
      })
  }
  render() {
    if (this.state.input) {
      return (
        <input className="student-add-input" 
        name='name'
        onKeyDown={() => this.handleSubmit(event)}
        value={this.state.inputName}
        onChange={() => this.handleChange()}
        />
            
      );
    } else {
      return (
        <p className="student-add" onClick={() => this.handleClick()}>
          +添加学员
        </p>
      );
    }
  }
}

export default AddStudent;
