import React from 'react'
import { Link } from "react-router-dom"


const Users = () => {
    return (
        <><div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-0 text-gray-800">Tables</h1>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.<br/>
                    For more information about DataTables, please visit the <a target="_blank"
                     href="https://datatables.net">official DataTables documentation</a>.
                </p>
                <Link to={"/users-create"}  type="button" className="d-none d-sm-inline-block btn btn-xs btn-primary shadow-sm"> Create User</Link>
            </div>


            {/* <!-- DataTales Example --> */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th className='text-center'>CRED</th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                    <td>
                                        <div className='text-center'>
                                            <Link to={"/user-view/:id"} type="button" className="btn btn-warning m-1">View</Link>
                                            <button type="button" className="btn btn-primary m-1">Edit</button>
                                            <button type="button" className="btn btn-danger m-1">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                    <td>
                                        <div className='text-center'>
                                            <Link to={"/user-view/:id"} type="button" className="btn btn-warning m-1">View</Link>
                                            <button type="button" className="btn btn-primary m-1">Edit</button>
                                            <button type="button" className="btn btn-danger m-1">Delete</button>
                                        </div>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>


        </>
    )
}

export default Users