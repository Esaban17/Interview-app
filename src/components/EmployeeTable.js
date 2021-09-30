import React, { Component } from 'react'

export default class EmployeeTable extends Component {
    render() {
        if (this.props.employees.length > 0) {
            var listEmployees = this.props.employees.map((employee, idx) => {
                return (
                    <tr key={idx}>
                        <th scope="row">{employee.id}</th>
                        <td>{employee.employee_name}</td>
                        <td>{employee.employee_salary}</td>
                        <td>{employee.employee_age}</td>
                        <td>
                            {employee.profile_image !== '' ? (
                                <img src={employee.profile_image} style={{ "height": "150px", "width": "100px" }} className="img-fluid" alt="employee" />
                            ) : (
                                <img src='https://digital-production.campus-party.org/production/wp-content/uploads/sites/2/2021/05/speaker.png' style={{ "height": "150px", "width": "150px" }} className="img-fluid" alt="employee" />
                            )}
                        </td>
                    </tr>
                );
            })
            return (
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Age</th>
                                <th scope="col">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listEmployees}
                        </tbody>
                    </table>
                </div>
            );
        } else if (this.props.employees.length === 0 && this.props.status === 'success') {
            return (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>No employees to display!</strong>.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            );
        } else {
            return (
                <div className="alert alert-info alert-dismissible fade show" role="alert">
                    <strong>Cargando...</strong>.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )
        }

    }
}
