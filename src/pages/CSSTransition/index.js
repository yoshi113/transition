import React from "react";
import { Switch, Block } from "./styles";

const Page = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Switch onClick={() => setVisible(!visible)}>
        {visible ? "Show Block" : "Hide Block"}
      </Switch>
      <Block visible={visible} />
    </>
  );
};

export default Page;
