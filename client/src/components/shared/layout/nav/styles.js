import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import colors from "../../../../styles/colors";

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${colors.blue2};
`;

export const ListItem = styled.li`
  float: left;
`;

export const RightListItem = styled.li`
  float: right;
`;

export const Link = styled(RouterLink)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: #111;
  }
`;
