import { FC, useEffect } from "react";

const Child: FC = () => {
  console.debug("3) Child.render: start");
  useEffect(() => {
    console.debug("5) Child.useEffect");
  });
  console.debug("4) Child.render: end");
  return <div>Child</div>;
};

const WithChild: FC = () => {
  console.debug("1) WithChild.render: start");
  useEffect(() => {
    console.debug("6) WithChild.useEffect");
  });
  console.debug("2) WithChild.render: end");
  return <Child />;
};

export default WithChild;
