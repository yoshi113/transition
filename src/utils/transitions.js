import { css } from "styled-components";

export const fadeTransition = (duration, opacity = 1) => {
  return css`
    &.fade-enter {
      opacity: 0;
    }

    &.fade-enter-active {
      opacity: ${opacity};
      transition: opacity ${duration}ms;
    }

    &.fade-exit {
      opacity: ${opacity};
    }

    &.fade-exit-active {
      opacity: 0;
      transition: opacity ${duration}ms;
    }
  `;
};

export const moveTransition = (duration, x, y) => {
  return css`
    &.move-enter {
      transform: translate(${x}, ${y});
    }

    &.move-enter-active {
      transform: none;
      transition: transform ${duration}ms;
    }

    &.move-exit {
      transform: none;
    }

    &.move-exit-active {
      transform: translate(${x}, ${y});
      transition: transform ${duration}ms;
    }
  `;
};
