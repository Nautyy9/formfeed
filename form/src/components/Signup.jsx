import React, {useRef} from 'react'
import {Input , Label, FormGroup, Form, Card, CardBody, Container, Button, Alert } from 'reactstrap'
import {Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';


function Signup() {
    const emailRef =useRef();
    const passRef =useRef();
    const confirmPassRef =useRef();
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false)
    const {signup, currentUser} = useAuth()

  const handleSubmit =(e) =>{
    e.preventDefault();

    if(passRef.current.value !== confirmPassRef.current.value)
    {
      return setErr("Password doesn't match");
    }
    try{
      signup(passRef.current.value, confirmPassRef.current.value);
      setLoading('false')
    }catch{
      setErr('Failed to authenticate');
    }
    setLoading('true')
  }

  return (
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
        <div className='w-100' style={{maxWidth: "400px"}}>
        <h1 className='text-center mb-4'>Sign Up</h1>
     <Card>
        <CardBody>
          {currentUser && currentUser.email}
            {err && <Alert variant="danger">{err}</Alert>}
            <Form  onSubmit={handleSubmit}>
        <FormGroup >
          <Label for='emailtype'>Enter Email</Label>
          <Input type='email' name='email' placeholder='abc@xyz.com' id='emailtype' ref={emailRef} required/>
        </FormGroup>
        <FormGroup > 
          <Label for='passtype'>Enter Password</Label>
          <Input type='password' name='password' placeholder='' id='passtype' ref={passRef} required/>
        </FormGroup>
        <FormGroup >
          <Label for='cnfrpasstype'>Enter Password</Label>
          <Input type='password' name='password' placeholder='' id='cnfrpasstype' ref={confirmPassRef}/>
        </FormGroup>
      </Form>
      <Button type='submit' className=' bg-primary' disabled={loading}>Sign Up</Button>

        </CardBody>
     </Card>
     <p className='text-center mt-2'>Already a customer ? <Link to='/'>Sign-in</Link></p>
     </div>
    </Container>
  )
}

export default Signup