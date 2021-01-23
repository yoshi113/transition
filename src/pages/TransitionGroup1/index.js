import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Root, Button, Box, Item } from "./styles";

const items = [1, 2, 3, 4, 5, 6];

const Page = () => {
  const [index, setIndex] = React.useState(0);

  const handlePrev = () => {
    setIndex((index + items.length - 1) % items.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % items.length);
  };

  return (
    <Root>
      <Box>
        <TransitionGroup>
          <CSSTransition key={index} timeout={1000} classNames="fade">
            <Item>{items[index]}</Item>
          </CSSTransition>
        </TransitionGroup>
      </Box>
      <Button onClick={handlePrev}>►</Button>
      <Button onClick={handleNext}>►</Button>
      <Button onClick={handlePrev}>▲</Button>
      <Button onClick={handleNext}>▼</Button>
    </Root>
  );
};

export default Page;
