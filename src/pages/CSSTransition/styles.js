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
  transition: opacity 1s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;
