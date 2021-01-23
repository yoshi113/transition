import React from "react";
import { Button, Item } from "./styles";

let id = 1;

const Page = () => {
  const [items, setItems] = React.useState([]);

  const handleAdd = () => {
    setItems([id++, ...items]);
  };

  const handleRemove = (id) => {
    setItems(items.filter((item) => item !== id));
  };

  return (
    <>
      <Button onClick={handleAdd}>Add</Button>
      {items.map((item) => (
        <Item key={item}>
          Item {item}
          <span onClick={() => handleRemove(item)}>x</span>
        </Item>
      ))}
    </>
  );
};

export default Page;
