import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>React Developer Hiring Assignment</h1>
      <Link to="/dashboard">
        <button className="bg-black text-white p-3 rounded-2xl">
          Student DashBoard
        </button>
      </Link>

      <Link to="/">
        <button className="bg-slate-500 p-2 rounded-2xl m-auto"> Home</button>
      </Link>
    </div>
  );
};

export default Header;
