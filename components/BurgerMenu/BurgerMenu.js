import styled from "styled-components";
import { useState } from "react";
import BurgerOverlay from "./BurgerOverlay";

export default function BurgerMenu() {
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

  function handleClick() {
    setToggleBurgerMenu((previousToggle) => !previousToggle);
  }

  return (
    <>
      <MenuLabel htmlFor="navigation toggle" onClick={handleClick}>
        <Icon clicked={toggleBurgerMenu} />
      </MenuLabel>
      {toggleBurgerMenu === true ? <BurgerOverlay /> : ""}
    </>
  );
}

// idea from https://codebucks.hashnode.dev/react-hamburger-menu

const MenuLabel = styled.label`
  background-color: transparent;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#22b1a4")};
  width: 30px;
  height: 2px;
  display: inline-block;

  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: var(--text-primary);
    width: 30px;
    height: 2px;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.6em")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.6em")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.6em")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "0.6em")};
  }
`;
