import styled from "styled-components";
import { moveTransition } from "../../utils/transitions";

export const Root = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
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

  &.up-enter {
    transform: translate(0, -100%);
  }
  &.up-enter-active {
    transform: none;
    transition: transform 500ms;
  }
  &.up-exit {
    transform: none;
  }
  &.up-exit-active {
    transform: translate(0, 100%);
    transition: transform 500ms;
  }

  &.down-enter {
    transform: translate(0, 100%);
  }
  &.down-enter-active {
    transform: none;
    transition: transform 500ms;
  }
  &.down-exit {
    transform: none;
  }
  &.down-exit-active {
    transform: translate(0, -100%);
    transition: transform 500ms;
  }

  &.left-enter {
    transform: translate(-100%, 0);
  }
  &.left-enter-active {
    transform: none;
    transition: transform 500ms;
  }
  &.left-exit {
    transform: none;
  }
  &.left-exit-active {
    transform: translate(100%, 0);
    transition: transform 500ms;
  }

  &.right-enter {
    transform: translate(100%, 0);
  }
  &.right-enter-active {
    transform: none;
    transition: transform 500ms;
  }
  &.right-exit {
    transform: none;
  }
  &.right-exit-active {
    transform: translate(-100%, 0);
    transition: transform 500ms;
  }
`;
