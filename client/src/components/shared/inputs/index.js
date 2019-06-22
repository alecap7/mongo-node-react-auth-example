import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  box-sizing: border-box;
  font-size: 14px;
  padding: 6px 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.error ? "red" : "black")};
  margin: 0;
`;

const Text = props => <StyledInput type="text" {...props} />;

const Password = props => <StyledInput type="password" {...props} />;

const Submit = props => <StyledInput type="submit" {...props} />;

export { Text, Password, Submit };
