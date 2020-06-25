import React from "react";
import logo from "./logo.svg";
import igIcon from "./igicon.png";
import durian from "./mangrupchips-durian.png";
import banana from "./banana.png";
import jackfruit from "./jackfruit.png";
import click from "./click.png";
import styled, { css } from "styled-components";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <LogoContainer>
          <a href='https://www.instagram.com/mangrupchips'>
            <div>
              <img src={jackfruit} className='App-logo' alt='logo' />
            </div>
          </a>
          <a href='https://www.instagram.com/mangrupchips'>
            <div>
              <img src={durian} className='App-logo' alt='logo' />
            </div>
          </a>
          <a href='https://www.instagram.com/mangrupchips'>
            <div>
              <img src={banana} className='App-logo' alt='logo' />
            </div>
          </a>
        </LogoContainer>

        <Title>
          <a href='https://www.instagram.com/mangrupchips'>Mangrupchips</a>
          <br />
          <span>Coming Soon!! </span>
        </Title>
        <ClickIcon>
          <img src={click} alt='logo' />
        </ClickIcon>
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

const LogoContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  div {
    width: 80%;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

const Title = styled.h1`
  a {
    font-size: 4.2rem;
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

const IgLink = styled.a`
  color: #f4f4f4;
  font-size: 30px;
  margin: auto 0;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const ClickIcon = styled.div`
  width: 100px;
  height: 20px;
  margin-bottom: -20px;
  img {
    width: 100%;
  }
`;
