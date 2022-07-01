import React from 'react'
import Sidebar from './Sidebar'
import DropdownComp from '../minor/DropdownComp'
import {Form, FormSelect} from 'reactstrap'

// import { useState } from 'react'
// import Button from 'react-bootstrap/Button';

function FormComp() {

    // const [curr, setCurr] = useState();

  return (
    <div className='row ' >
        <Sidebar/>
       
    <Form className=" col ">
        <DropdownComp/>
      <div className="form-floating flex-row row-2 m-5">
        <input type="email" id='inputEmail' className='form-control' placeholder='model'></input>
        <label htmlFor='inputEmail' className='form-label'>Model</label> 
      </div>
      <div className="form-floating flex-row row-2 m-5">
        <input type="text" id='inputAddress' className='form-control' placeholder='core'></input>
        <label htmlFor='inputAddress' >Core</label>
      </div>
      <div className="form-floating flex-row row-2 m-5">
        <input type="text" id='inputName' className='form-control' placeholder='drive'></input>
        <label htmlFor='inputName' >Drive</label>
      </div>
      <div className="form-floating row-2 mb-3 m-5">
        <input type="text" id='inputName' className='form-control' placeholder='Year'></input>
        <label htmlFor='inputName'>Year</label>
      </div>
      <div className="form-floating flex-row row-2 mb-3 m-5 ">
        <input type="text" id='inputName' className='form-control' placeholder='System'></input>
        <label htmlFor='inputName'>System</label>
      </div>
      <button type='submit' className=' p-2 mt-0 m-5 btn btn-primary'>
        Button
      </button>
    </Form>
    </div>
  
  )
}

export default FormComp