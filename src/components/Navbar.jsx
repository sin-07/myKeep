import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-400 py-4">
        <ul className="flex justify-center gap-10 items-center font-bold text-xl">
            <li>
                <Link className="" to="/">Home</Link>
            </li>
            <li>
                <Link to="create">Create TODO</Link>
            </li>
<li>
                <Link to="create">delete TODO</Link>
            </li>
        </ul>
        </div>   
    </>
  );
};

export default Navbar;
