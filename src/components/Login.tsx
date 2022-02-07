import React, { useState } from "react";

type LoginStateProps = {
  name: string;
  email: string;
  address: string;
};

const Login: React.FC = () => {
  const [login, setlogin] = useState<boolean>(false);
  const [user, setuser] = useState<LoginStateProps>({
    name: "Mahedi Hasan",
    email: "mahedi@gmail.com",
    address: "Dhaka Bangladesh",
  });
  const handleLogin = () => {
    setlogin(true);
    console.log("login");
  };
  const handleLogout = () => {
    setlogin(false);
    console.log("logout");
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <br />
      <br />
      <h3>{login ? "Logged in" : "logged out"}</h3>
      {login && user?.name}
      <br />
      {login && user?.email}
      <br />
      {login && user?.address}
      <br />
    </div>
  );
};

export default Login;
