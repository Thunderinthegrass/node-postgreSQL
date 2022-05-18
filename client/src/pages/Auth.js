import React from "react";
import { Card, Container, Form } from "react-bootstrap";

const Auth = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
      <Card style={{width: 600, padding: '10px', border: "1px solid #000000"}}>
        <h2 style={{textAlign: 'center'}}>Авторизация</h2>
        <Form className="d-flex, flex-direction-column">
          <Form.Control
            style={{textAlign: 'center', marginBottom: '10px', borderColor: '#000000'}}
            placeholder="Введите Email ваш"
          />
          <Form.Control
            style={{textAlign: 'center', borderColor: '#000000'}}
            placeholder="Введите ваш пароль"
          />
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;