import React from 'react'
import Nav from '../../components/Nav';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import Row from '../../components/Row';
import styled from 'styled-components';
import request from '../../api/requests';

const MainPage = () => {
  return (
    <Container>
    <Nav/>
    <Banner/>
    <Category/>
    <Row title="Trending Now" id="TN" fetchUrl={request.fetchTrending}/>
    <Row title="Top Rate" id="TR" fetchUrl={request.fetchTopRated}/>
    <Row title="RomanceMovies" id="RM" fetchUrl={request.fetchRomanceMovies}/>
    <Row title="ComedyMovies" id="CM" fetchUrl={request.fetchComedyMovies}/>
  </Container>
  )
}
export default MainPage

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 75px;
  padding: 0 calc(3.5vw + 5px);

  
  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;