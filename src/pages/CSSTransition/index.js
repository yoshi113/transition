import React from "react";
import { CSSTransition } from "react-transition-group";
import { Switch, Block } from "./styles";

const Page = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Switch onClick={() => setVisible(!visible)}>
        {visible ? "Show Block" : "Hide Block"}
      </Switch>
      <CSSTransition in={visible} timeout={1000} unmountOnExit>
        <Block />
      </CSSTransition>
    </>
  );
};

export default Page;
