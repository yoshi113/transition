import styled from "styled-components";
import { fadeTransition, moveTransition } from "../../utils/transitions";

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
  ${fadeTransition(1000)}
  ${moveTransition(1000, "100%", 0)}
`;
