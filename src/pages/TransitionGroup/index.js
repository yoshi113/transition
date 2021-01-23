import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup>
        {items.map((item) => (
          <CSSTransition key={item} timeout={500}>
            <Item>
              Item {item}
              <span onClick={() => handleRemove(item)}>x</span>
            </Item>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default Page;
