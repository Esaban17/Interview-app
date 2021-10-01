import React, { Component } from 'react';
import axios from 'axios'
import './assets/css/App.css';
import Header from './components/Header.js';
import EmployeeForm from './components/EmployeeForm.js';
import EmployeeTable from './components/EmployeeTable.js';
import Footer from './components/Footer.js';

class App extends Component {

  state = {
    id: '',
    employees: [],
    status: null,
    found: true,
    form: {}
  }

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleText = async (e) => {
    await this.setState({ id: e.target.value });
  }

  handleById = async (e) => {
    e.preventDefault();
    await this.getEmployee();
  }

  handleAll = async (e) => {
    e.preventDefault();
    await this.getEmployees();
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.postEmployee();
  }

  getEmployees = async () => {
    try {
      const result = await axios.get('http://dummy.restapiexample.com/api/v1/employees');

      var filtered = result.data.data.filter(x => x.employee_salary > 300000);
      var count = filtered.length;

      console.log(count + " Empleados que ganan más de 300,000");

      this.setState({
        employees: result.data.data,
        status: result.data.status
      })
    } catch (error) {
      console.log(error);
    }
  }

  getEmployee = async () => {
    if (this.state.id !== '') {
      try {
        let tempArray = [];
        const result = await axios.get(`https://dummy.restapiexample.com/api/v1/employee/${this.state.id}`);
        if (result.data.data !== null) {
          console.log('Entre')
          tempArray.push(result.data.data);
          await this.setState({
            employees: tempArray,
            status: result.data.status
          });
        } else {
          this.setState({ found: false });
        }
      } catch (error) {
        this.setState({ found: false });
        console.log(error);
      }
    }
  }

  postEmployee = async () => {
    let { form } = this.state;
    try {
      const requestOptions = {
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      };
      // const result = await axios.post('http://dummy.restapiexample.com/api/v1/create', form);
      const result = await fetch('http://dummy.restapiexample.com/api/v1/create', requestOptions);
      const data = await result.json();
      console.log(data);
      await this.getEmployees();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <br />
        <div className="container">
          <h2 style={{ 'textAlign': 'left' }}>New Employee</h2>
          <br />
          <EmployeeForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}></EmployeeForm>
          <hr />
          <h2 style={{ 'textAlign': 'left' }}>Employees</h2>
          <br />
          <div>
            <div className="row mb-3">
              <div className="col-md-2">
                <input
                  type="email"
                  className="form-control form-control"
                  id="colFormLabelSm"
                  placeholder="Find By Id"
                  value={this.state.id}
                  onChange={this.handleText}
                />
              </div>
              <div className="col-md-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ 'float': 'left' }}
                  onClick={this.handleById}
                >
                  Get By Id
                </button>
              </div>
              <div className="col-md-8">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ 'float': 'right' }}
                  onClick={this.handleAll}
                >
                  Get All
                </button>
              </div>
            </div>
            {this.state.employees.length > 0 ? (
              <EmployeeTable employees={this.state.employees}></EmployeeTable>
            ) : (
              <p>No hay datos para mostrar</p>
            )}

            {!this.state.found && (
              <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Id no existente</strong>.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            )}
          </div>
          <div className="clearfix"></div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
