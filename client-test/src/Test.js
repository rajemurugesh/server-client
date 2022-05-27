import React, { Component } from 'react';
import getData from "./Employee";
class Test extends Component {
  state = {
    data: getData(),
  };
  handleAdd = () => {
    console.log("working");
  };
  handlDelete = (d) => {
    //console.log(this.state.data);
    const moves = this.state.data.filter((p) => p.emp_id !== d.emp_id);
    //console.log(moves)
    this.setState({
      data: moves,
    });
    //console.log(this.state.data)
  };
    render() {
        if (this.state.data.length === 0) {
            return <h5>There is no staff records in AL MAHA MARBLE L.L.C</h5>;
        }
    
        return (
        <div>
            <h1>AL MAHA MARBLE L.L.C-OMAN</h1>
            <h5>Showing {this.state.data.length} Staff Records-2022</h5>;

            <table className="table">
            <thead>
            <tr>
              <th>Emp_id</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Salary</th>
              <th>Insured Amt</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((d) => {
              return (
                <tr key={d.emp_id}>
                  <td>{d.emp_id}</td>
                  <td>{d.name}</td>
                  <td>{d.dateofbirth}</td>
                  <td>{d.salary}</td>
                  <td>{d.suminsuredamt}</td>
                  <td>
                    <button
                      onClick={() => this.handlDelete(d)}
                      type="button"
                      className="btn btn-danger">Delete
                    </button> 
                    </td>
                </tr>
              );
           } )
        }
          
          </tbody>
            </table>
        </div>
        )
              }
        
    }


export default Test;