import styled, { css } from "styled-components";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: #ffc220;
`;

export const GroupContainer = styled.div`
  position: relative;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none !important;
  color: white !important;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid white;
  margin: 25px 0;
  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: white;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 20px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
