import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <Outlet />
      <div>About</div>
    </>
  );
}