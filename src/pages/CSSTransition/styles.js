import styled from "styled-components";

export const Switch = styled.div`
  width: 150px;
  margin-bottom: 50px;
  padding: 10px 30px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const Block = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;

  &.enter {
    opacity: 0;
  }
  &.enter-active {
    opacity: 1;
    transition: opacity 1s;
  }
  &.exit {
    opacity: 1;
  }
  &.exit-active {
    opacity: 0;
    transition: opacity 1s;
  }
`;
