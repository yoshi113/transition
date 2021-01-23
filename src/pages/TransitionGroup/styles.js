import styled from "styled-components";

export const Button = styled.div`
  width: 150px;
  margin-bottom: 50px;
  padding: 10px 30px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  height: 40px;
  padding-left: 20px;
  border: 1px solid #ccc;
  margin-bottom: -1px;

  span {
    padding: 5px 10px;
    line-height: 1;
    opacity: 0.5;
    cursor: pointer;
  }
`;
