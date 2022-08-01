import React from 'react'
import { Container, Button, Form, FormControl, FormLabel, FormText, FormGroup } from 'react-bootstrap'
import '../App.css'

const Contacts = () => {
  return (
    <Container style={{ width: '500px' }}>
      <h3 className='text-center mt-3'>Contact us</h3>
      <Form>
        <Form.Group className="mb-3" controlId='FormBasicEmail'>
          <FormLabel>Email address</FormLabel>
          <FormControl type='email' placeholder='Enter email'></FormControl>
          <FormText>We never share your email with anyone else</FormText>
        </Form.Group>
        <FormGroup className="mb-3" controlId='FormBasicPassword'>
          <Form.Label>Example text</Form.Label>
          <Form.Control type='password' rows='3' placeholder="Password"></Form.Control>
        </FormGroup>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="warning" type="submit" className='btnSub'>Submit</Button>
      </Form>
    </Container>
  )
}

export default Contacts;

