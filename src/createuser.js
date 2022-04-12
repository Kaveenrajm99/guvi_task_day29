import React from 'react'

const Createuser = () => {
    return (
        <div className='container'>
            <form>         
                <div className='row'>
                    <div className='col-lg-6'>
                        <label>Name</label>
                        <input type={"text"} className="form-control" />
                    </div>
                    <div className='col-lg-6'>
                        <label>Position</label>
                        <input type={"text"} className="form-control" />
                    </div>
                    <div className='col-lg-6'>
                        <label>Office</label>
                        <input type={"text"} className="form-control" />
                    </div>
                    <div className='col-lg-6'>
                        <label>Age</label>
                        <input type={"number"} className="form-control" />
                    </div>
                    <div className='col-lg-6'>
                        <label>Start-Date</label>
                        <input type={"date"} className="form-control" />
                    </div>
                    <div className='col-lg-6'>
                        <label>Salary</label>
                        <input type={"number"} className="form-control" />
                    </div>
                    <div className='col-lg-6'>
                        <input type={"submit"} className="btn btn-primary mt-4" />
                    </div>
                </div>            
            </form>
        </div>
    )
}

export default Createuser