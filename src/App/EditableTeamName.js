import React, { Component } from 'react';

class EditableTeamName extends Component {
  state = {
    input: false,
    teamName: this.props.teamName,
  };
  handleSubmit = (event) => {
    if (event.keyCode == 13) {
      URL = `http://localhost:8080/team/${this.props.teamName}/${this.state.teamName}`;
      fetch(URL, {
        method: 'Put',
      })
        .then((Response) => {
          if (Response.status === 200) {
            this.setState({
                input: false,
                teamName: this.state.teamName,
              });
          } else {
            this.setState({
                input: false,
                teamName: this.props.teamName,
              });
          }
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
        teamName: event.target.value,
      })
  }
  render() {
    if (this.state.input) {
      return (
        <input className="team-name-input"
        onKeyDown={() => this.handleSubmit(event)}
        value={this.state.teamName}
        onChange={() => this.handleChange()}
        />
            
      );
    } else {
      return (
        <h3
        className="team-name"
        onClick={() => this.handleClick()}
        >
            {this.state.teamName}
        </h3>
      );
    }
  }
}

export default EditableTeamName;
