import React from "react";
import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/nopage">Test....</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default MainLayout;
