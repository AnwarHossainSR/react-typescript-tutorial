import React from "react";

type StatusProps = {
  children: string;
};

const Container: React.FC<StatusProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Container;
