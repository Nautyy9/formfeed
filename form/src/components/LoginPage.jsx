import React from 'react'
import { Form , FormGroup, Label, Input, }from 'reactstrap'

function LoginPage() {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for='emailtype'>Enter Email</Label>
          <Input type='email' name='email' placeholder='abc@xyz.com' id='emailtype'/>
        </FormGroup>
        <FormGroup>
          <Label for='passtype'>Enter Password</Label>
          <Input type='password' name='password' placeholder='strong password required' id='passtype'/>
        </FormGroup>
      </Form>
    </div>
  )
}

export default LoginPage