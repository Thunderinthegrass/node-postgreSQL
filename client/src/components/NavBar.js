import React from "react";
import { useContext } from "react";
import { Context } from "..";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { Button, Container } from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <NavLink
        style={{ color: "white", textDecoration: "none" }}
        to={SHOP_ROUTE}
      >
        Главная
      </NavLink>
      {user.isAuth ? (
        <Nav style={{ marginLeft: "auto", color: "#ffffff" }}>
          <Button variant={"outline-light"}>Отправить заявку</Button>
          <Button variant={"outline-light"} style={{ marginLeft: "5px" }}>Войти</Button>
        </Nav>
      ) : (
        <Nav style={{ marginLeft: "auto", color: "#ffffff" }}>
          <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
        </Nav>
      )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
