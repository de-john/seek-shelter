



import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/style.css';

export default class SignUp extends React.Component {
  render() {
    const style = {
      width: '90%',
      height: '85vh',
    };
    return (
      <Form style={style}>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="John Smith" required />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email@email.com" required />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Number of people?</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
} 
