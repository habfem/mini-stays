import React, { useRef } from 'react'
import styled from "styled-components";
import emailjs from "@emailjs/browser";

//import { Form, Button, Image } from 'react-bootstrap';
//import FormContainer from '../components/FormContainer'
import firstSlide from '../images/PHOTO-2022-11-30-11-20-58 (2).jpg'
//import { useState } from 'react';

const ContactScreen = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('xxxxxxx', 'xxxxxxxx', form.current, 'xxxxxxxxxx')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='center'>
      <img className="d-block w-100 mahn" src={firstSlide} alt="Bed Room" />
      <br></br>
      <StyledContactForm>
        <h2>CONTACT US</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </div>
  )
}

export default ContactScreen

//Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(13, 12, 12);
      color: white;
      border: none;
    }
  }
`;