import React, { useState } from 'react'
import {Input, FormGroup, Form } from 'reactstrap'


function DropdownComp() {

  const [open, setOpen] = useState(false);

  // const changeDef= () =>  {

  // }

  return (
    <Form className=' mb-2 p-6' >
     <FormGroup>
          <p for="exampleSelect" className='text-center'>Requirements</p>
          <Input type="select" name="select" id="exampleSelect" className='form-control'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
  </Form>
  )
}

export default DropdownComp