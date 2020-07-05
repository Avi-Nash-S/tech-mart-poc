import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid white;

  &:hover {
    transition: background-color 1000ms ease-out;
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    transition: background-color 500ms ease-out;
    background-color: black;
    border: 1px solid white;
    color: white;
  }
`;

const googleSignInStyles = css`
  color: black;
  border: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    color: white;
    transition: background-color 500ms ease-out;
    background-color: black;
    border: solid 1px white;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
