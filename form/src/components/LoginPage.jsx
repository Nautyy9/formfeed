import React,{useRef, useState}from 'react'
import { Form , FormGroup, Label, Input, Button, Card, CardBody, Container, Alert}from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import { AuthProvider , useAuth} from '../context/AuthContext'



 function LoginPage() {

  const emailRef =useRef()
  const passRef =useRef()
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const {signin} = useAuth();
  const nav = useNavigate();

   const handleSubmit =async (e) =>{
    e.preventDefault();

    try{

      setErr("")
      setLoading('true')
      await signin(emailRef.current.value, passRef.current.value);
      nav('/');
    }catch{
      setErr('Failed to Sign In');
    }
    setLoading('false')
  }


  return (
    <AuthProvider>
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "400px"}} >
      <h1 className='text-center mb-4'>Sign In</h1>
      <Card>
        <CardBody>
        {err && <Alert variant="danger">{err}</Alert>}
          <Form onSubmit={handleSubmit}>
        <FormGroup >
          <Label for='emailtype'>Enter Email</Label>
          <Input type='email' name='email'  id='emailtype' ref={emailRef}/>
        </FormGroup>
        <FormGroup>
          <Label for='passtype'>Enter Password</Label>
          <Input type='password' name='password'  id='passtype' ref={passRef}/>
        </FormGroup>
        <Button  type='submit' className=' bg-primary' disabled={loading}>Sign In</Button>
        
      </Form>
        </CardBody>
      </Card>
      <p className='text-center mt-2'>New customer ? <Link to='/sign-up'>Sign-up</Link></p>
      </div>
    </Container>
    </AuthProvider>
  )
}

export default LoginPage