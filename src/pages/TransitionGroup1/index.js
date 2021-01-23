import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Root, Button, Box, Item } from "./styles";

const items = [1, 2, 3, 4, 5, 6];

const Page = () => {
  const [index0, setIndex0] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const [dir, setDir] = React.useState("");
  const [lock, setLock] = React.useState(false);

  React.useEffect(() => {
    setIndex(index0);
  }, [index0]);

  const update = (index, dir) => {
    if (lock) return;
    setIndex0(index);
    setDir(dir);
  };

  const handleUp = () => {
    update((index0 + items.length - 1) % items.length, "up");
  };

  const handleDown = () => {
    update((index0 + 1) % items.length, "down");
  };

  const handleLeft = () => {
    update((index0 + items.length - 1) % items.length, "left");
  };

  const handleRight = () => {
    update((index0 + 1) % items.length, "right");
  };

  return (
    <Root>
      <Box>
        <TransitionGroup component={null}>
          <CSSTransition
            key={index}
            timeout={500}
            classNames={dir}
            onEnter={() => setLock(true)}
            onEntered={() => setLock(false)}
          >
            <Item>{items[index]}</Item>
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
