import React from "react";

type ParentsProps = {
  children: React.ReactNode;
};

const Parents: React.FC<ParentsProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Parents;
