import React from "react";
import logo from "./logo.svg";
import igIcon from "./igicon.png";
import durian from "./mangrupchips-durian.png";
import styled, { css } from "styled-components";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <a href='https://www.instagram.com/mangrupchips'>
          <img src={durian} className='App-logo' alt='logo' />
        </a>
        <Title>
          <a href='https://www.instagram.com/mangrupchips'>Mangrupchips</a>
          <br />
          <span>Coming Soon!! </span>
        </Title>
        <Description>แล้วพบกับเว็บไซต์เต็มรูปแบบเร็ว ๆ นี้จ้า</Description>
        <IgContainer>
          <a href='https://www.instagram.com/mangrupchips'>
            <img src={igIcon} className='ig-logo' alt='ig-logo' />
          </a>
          <IgLink href='https://www.instagram.com/mangrupchips'>
            IG: mangrupchips
          </IgLink>
        </IgContainer>
      </header>
    </div>
  );
}

export default App;

const IgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  a {
    font-size: 4.5rem;
    color: #f0a500;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  span {
    color: #f4f4f4;
  }
`;

const Description = styled.h2`
  color: #cf7500;
`;

const IgLink = styled.a`
  color: #f4f4f4;
  margin: auto 0;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
