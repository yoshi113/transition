import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Box = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px solid #ccc;
  overflow: hidden;
`;

export const Item = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 30px;
`;

export const Button = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:nth-of-type(1) {
    right: 100%;
    transform: scaleX(-1);
  }
  &:nth-of-type(2) {
    left: 100%;
  }
  &:nth-of-type(3) {
    bottom: 100%;
  }
  &:nth-of-type(4) {
    top: 100%;
  }
`;
