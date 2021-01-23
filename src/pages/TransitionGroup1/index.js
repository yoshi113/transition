import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Root, Button, Box, Item } from "./styles";

const items = [1, 2, 3, 4, 5, 6];

const Page = () => {
  const [index0, setIndex0] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const [dir, setDir] = React.useState("");

  React.useEffect(() => {
    setIndex(index0);
  }, [index0]);

  const handleUp = () => {
    setIndex0((index0 + items.length - 1) % items.length);
    setDir("up");
  };

  const handleDown = () => {
    setIndex0((index0 + 1) % items.length);
    setDir("down");
  };

  const handleLeft = () => {
    setIndex0((index0 + items.length - 1) % items.length);
    setDir("left");
  };

  const handleRight = () => {
    setIndex0((index0 + 1) % items.length);
    setDir("right");
  };

  return (
    <Root>
      <Box>
        <TransitionGroup component={null}>
          <CSSTransition key={index} timeout={1000} classNames={dir}>
            <Item class>{items[index]}</Item>
          </CSSTransition>
        </TransitionGroup>
      </Box>
      <Button onClick={handleLeft}>►</Button>
      <Button onClick={handleRight}>►</Button>
      <Button onClick={handleUp}>▲</Button>
      <Button onClick={handleDown}>▼</Button>
    </Root>
  );
};

export default Page;
