import { Outlet } from "react-router-dom";

const LayoutRoot = () => {
  return <>
    <nav>NavBar</nav>
    <Outlet />
    <footer>Footer</footer>
  </>
}

export default LayoutRoot;