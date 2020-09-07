import React, { Component } from 'react';
import '../style/studentsList.scss';

class studentsList extends Component {
    state = {
        data: [],
    }

    componentDidMount = () => {
        URL = "http://localhost:8080/students"
        fetch(URL, {
            method:"GET",
        }).then(Response => {
            if (Response.status === 200) {
                return Response.json();
            }
            else {
                Promise.reject();
            }
        }).then(jsonData => {
            this.setState({
                data: jsonData,
            })
        })
        
    }

  render() {
    return (
      <div className="students-list">
        <h2>学员列表</h2>
        <div className="students-list-content">
            {
                Object.keys(this.state.data).map(key => (
                <p className='student' key={key}>
                    {`${this.state.data[key].num}. ${this.state.data[key].name}`}
                </p>
                ))
            }
        </div>
            
      </div>
    );
  }
}

export default studentsList;
