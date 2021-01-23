import React from "react";
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
        <Item>{items[index]}</Item>
      </Box>
      <Button onClick={handlePrev}>►</Button>
      <Button onClick={handleNext}>►</Button>
      <Button onClick={handlePrev}>▲</Button>
      <Button onClick={handleNext}>▼</Button>
    </Root>
  );
};

export default Page;
