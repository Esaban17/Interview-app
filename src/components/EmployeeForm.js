import React, { Component } from 'react'

export default class EmployeeForm extends Component {
    render() {
        return (
            <div>
                <div className="row mb-3">
                    <label htmlFor="colFormLabelSm" className="col-sm-1 col-form-label col-form-label">Name</label>
                    <div className="col-sm-5">
                        <input 
                            type="text" 
                            className="form-control form-control" 
                            id="colFormLabelSm" 
                            name='name'
                            onChange={this.props.handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-1 col-form-label">Salary</label>
                    <div className="col-sm-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="colFormLabel" 
                            name='salary'
                            onChange={this.props.handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="colFormLabelLg" className="col-sm-1 col-form-label col-form-label">Age</label>
                    <div className="col-sm-5">
                        <input 
                            type="text" 
                            className="form-control form-control" 
                            id="colFormLabelLg" 
                            name='age'
                            onChange={this.props.handleChange}
                        />
                    </div>
                </div>
                <br/>
                <div className="col-sm-6">
                    <button type="submit" className="btn btn-secondary" onClick={this.props.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}
