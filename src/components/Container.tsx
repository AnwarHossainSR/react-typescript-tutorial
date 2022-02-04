import React from "react";

type ContainerProps = {
  name: string;
  messages: number;
  isLogged: boolean;
};

const Container = (props: ContainerProps) => {
  return (
    <div>
      <h1>
        Hello {props.isLogged ? props.name : ""} ! how are you?{" "}
        {props.isLogged ? `you have ${props.messages} messages` : ""}
      </h1>
    </div>
  );
};

export default Container;
