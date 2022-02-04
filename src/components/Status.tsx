import React from "react";
type StatusProps = {
  status: "success" | "error" | "loading";
  data?: string;
};

const Status = (props: StatusProps) => {
  return (
    <>
      <h1>your current status is {props.status}</h1>
      <h1>Your name is {props.data}</h1>
    </>
  );
};

export default Status;
