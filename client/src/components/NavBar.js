import React from 'react';
import { useContext } from 'react';
import { Context } from "..";

const NavBar = () => {
  const {user} = useContext(Context);
  return (
    <div>Навбар</div>
  )
}

export default NavBar;