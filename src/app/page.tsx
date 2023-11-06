import { Notification, Login } from "./components";

export default function Home() {
  return (
    <>
      <Notification message={"Welcome to the authentication implementation."} />
      <Login />
    </>
  );
}
