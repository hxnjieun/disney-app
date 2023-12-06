import './App.css';
import Nav from './components/Nav';
import styled from 'styled-components';
import Banner from './components/Banner';

function App() {
  return (
    <Container>
      <Nav/>
      <Banner/>
    </Container>
  );
}

export default App;

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
//after,before은 가상 클래스 만듬,So.반드시 content정의