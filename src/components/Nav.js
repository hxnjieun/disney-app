import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from'styled-components'



const Nav = () => {
  const {pathname} = useLocation();
  const [show, setshow] = useState(false);
  const [searchValue, setsearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
  
    return () => {
      window.removeEventListener('scroll',handleScroll);
    };
  }, []);

    const handleScroll = () => {
      if(window.scrollY > 50){
        setshow(true);
      }else{
        setshow(false);
      }
    }
  const handleChange = (e) => {
    setsearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }

  return (
    <NavWrapper show={show}>
      <Logo>
        <img src="/images/logo.svg" alt="disney Plus logo"
        onClick={()=>(window.location.href="/")} />
      </Logo>
      {pathname === "/"? (<Login>Login</Login>):
      <Input
      value ={searchValue}
      onChange={handleChange}
      className='nav__input'
      type='text'
      placeholder='검색어를 입력해주세요.'
      /> }
    </NavWrapper>
  )
}

export default Nav

const Login = styled.a`
  background-color: rgba(0,0,0,0.6);
  padding: 8px 15px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border:1px solid #f9f9f9;
  transition: all 0.2s ease 0s;

  &:hover{
    background-color: #f9f9f9;
    color: #333;
    font-weight: 600;
    border-color: transparent;
  }
`;
const Input= styled.input`
  position:fixed;
  left:50%;
  transform: translate(-50%,0);
  background:rgba(0,0,0,0.5);
  color: #fff;
  padding:5px;
  border:none;
  margin-top: 15px;
`;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props=> props.show? '#090613': 'transparent'};
  display: flex;
  justify-content: space-between;
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
