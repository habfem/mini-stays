import React from 'react'
import { Form, Button, Image } from 'react-bootstrap';
import FormContainer from '../components/FormContainer'
import firstSlide from '../images/PHOTO-2022-11-30-11-20-58 (2).jpg'
import { useState } from 'react';

const ContactScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Hi there')
  }

  return (
    <>
      <Image className="d-block w-100 mahn" src={firstSlide} alt="Bed Room" />
      <br></br>
      <FormContainer>
        <h1>Get in touch</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control className='py-3' type='name' placeholder='Enter Full Name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
          </Form.Group>
          <br></br>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control className='py-3' type='email' placeholder='Enter email Address' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
          </Form.Group>

          <br></br>

          <Form.Group controlId='number'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='number' placeholder='Enter Phone Number' value={number} onChange={(e) => setNumber(e.target.value)}></Form.Control>
          </Form.Group>

          <br></br>

          <Form.Group controlId='message'>
            <Form.Label>Message</Form.Label>
            <Form.Control type='message' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></Form.Control>
          </Form.Group>

          <br></br>

          <div className="d-grid gap-2">
            <Button type='submit' variant='primary'>
              Send your Message
            </Button>
          </div>
        </Form>
      </FormContainer>
    </>
  )
}

export default ContactScreen