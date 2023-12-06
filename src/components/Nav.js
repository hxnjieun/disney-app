import React, { useState, useEffect } from 'react'
import styled from'styled-components'

const Nav = () => {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 50){
        setshow(true);
      }else{
        setshow(false);
      }
    });
  
    return () => {
      window.removeEventListener('scroll',()=>{});
    };
  }, []);
  

  return (
    <NavWrapper show={show}>
      <Logo>
        <img src="/images/logo.svg" alt="disney Plus logo"
        onClick={()=>(window.location.href="/")} />
      </Logo>
    </NavWrapper>
  )
}

export default Nav

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props=> props.show? '#D7F1FA': 'transparent'};
  display: flex;
  justify-content: space-between
  align-items: center;
  padding: 0 30px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top:0;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  
  img{
    display: block;
    width: 100%;
  }
`;
