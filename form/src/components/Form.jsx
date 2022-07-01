import React from 'react'
import {Link} from 'react-router-dom'
import DropdownComp from '../minor/DropdownComp'
import {Card, CardBody, Form, Container, Button} from 'reactstrap'

// import { useState } from 'react'
// import Button from 'react-bootstrap/Button';

function FormComp() {

    // const [curr, setCurr] = useState();

  return (
    <div className='d-flex row ' >
      <div className=" flex flex-col-sm-3 p-10 sidebar" >
        <div className="row m-4 p-3 ">
          <Link to='/add' style={{color: "white"}} className='text-decoration-none '>Add </Link>
        </div>
        <div className="row m-4 p-3">
          <Link to='/view' className='text-decoration-none' style={{color: "white"}}>View</Link>
        </div>
      </div>
      <Container className='flex col d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
        <div className='w-100' style={{maxWidth: "400px"}}>
        <h1 className='text-center'>Assets </h1>
          <Card className=" col ">
          <CardBody>
          
            <Form >
            <DropdownComp/>
          <div className="form-floating mb-4">
            <input type="email" id='inputEmail' className='form-control' placeholder='model'></input>
            <label htmlFor='inputEmail' className='form-label'>Model</label> 
          </div>
          <div className="form-floating mb-4">
            <input type="text" id='inputAddress' className='form-control' placeholder='core'></input>
            <label htmlFor='inputAddress' >Core</label>
          </div>
          <div className="form-floating mb-4 ">
            <input type="text" id='inputName' className='form-control' placeholder='drive'></input>
            <label htmlFor='inputName' >Drive</label>
          </div>
          <div className="form-floating mb-4 ">
            <input type="text" id='inputName' className='form-control' placeholder='Year'></input>
            <label htmlFor='inputName'>Year</label>
          </div>
          <div className="form-floating mb-4 ">
            <input type="text" id='inputName' className='form-control' placeholder='System'></input>
            <label htmlFor='inputName'>System</label>
          </div>
          <Button type='submit' className=' p-2  bg-primary'>
            Button
          </Button>
          </Form>
          </CardBody>
        </Card>
      </div>
      </Container>
    </div>
  
  )
}

export default FormComp