import { useState } from 'react';
import styled from 'styled-components';
import Toggle from '../components/Toggle';

function Home() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
  };
  
  // logs true if media query matches, otherwise false
  // console.log(useDarkMode);
  return (
    <Page light={isDarkMode ? true : false}>
      <Container>
        <Heading>
          <H1 light={isDarkMode ? true : false}>
            Dark Mode
          </H1>
          
          <P light={isDarkMode ? true : false}>
            Using <code>Styled-Components</code><br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Dicta error
            natus at vitae sint qui sapiente impedit rerum commodi fugit ullam
            repudiandae itaque, saepe fuga facere temporibus excepturi dolore
            officia ?
          </P>{' '}
          <Feature href='https://github.com/brookton' target='_blank'>💘</Feature>
          <Toggle checked={isDarkMode ? false : true} onChange={handleToggle} setDarkMode={setDarkMode}/>{' '}
        </Heading>{' '}
      </Container>{' '}
    </Page>
  );
}

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  transition: 0.5s;
  background: ${(props) => (props.light ? '#eee' : '#333')};
`;

const Feature = styled.a`
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
  transition: .2s all ease-in-out;
  background: none;
  color: ${props => !props.light ? "#eee" : "#333"};
  position: absolute;
  text-decoration: none;
  top: 0;
  right: 0;

  &:hover {
    transition: .2s all ease-in-out;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Heading = styled.div`
  max-width: 960px;
  margin: auto;
`;

const H1 = styled.h1`
  font-size: 3rem;
  color: ${(props) => (!props.light ? 'papayawhip' : '#000')};
`;

const P = styled.p`
  font-size: 2rem;
  color: ${(props) => (!props.light ? '#eee' : '#333')};
`;

export default Home;
