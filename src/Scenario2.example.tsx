import { FC, useEffect } from "react";

const useCustomHook = () => {
  console.debug("2) useCustomHook.render: start");
  useEffect(() => {
    console.debug("5) useCustomHook.useEffect");
  });
  console.debug("3) useCustomHook.render: end");
};

const ComponentUsesCustomHook: FC = () => {
  console.debug("1) ComponentUsesCustomHook.render: start");
  useCustomHook();

  useEffect(() => {
    console.debug("6) ComponentUsesCustomHook.useEffect");
  });

  console.debug("4) ComponentUsesCustomHook.render: end");

  return <h1>Hello World!</h1>;
};

export default ComponentUsesCustomHook;
