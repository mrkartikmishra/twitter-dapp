import React from "react";

import { Cube, Cog, User, Trending } from "@web3uikit/icons";
import { Link } from "react-router-dom";

const Leftbar = ({ showSidebar }) => {
  return (
    <>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 flex flex-col justify-between w-52 h-screen pt-20 transition-transform ${
          showSidebar ? "-translate-x-full" : "translate-x-0"
        } border-r sm:translate-x-0 bg-gray-800 border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={"/"}
                className="flex items-center p-2  rounded-lg text-white hover:bg-primary group"
              >
                <Cube fontSize={30} />
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="flex items-center p-2  rounded-lg text-white hover:bg-primary group"
              >
                <Trending fontSize={30} />
                <span className="ml-3">Trending</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/profile"}
                className="flex items-center p-2  rounded-lg text-white hover:bg-primary group"
              >
                <User fontSize={30} />
                <span className="ml-3">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to={"settings"}
                className="flex items-center p-2  rounded-lg text-white hover:bg-primary group"
              >
                <Cog fontSize={30} />
                <span className="ml-3">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white text-sm py-2 px-1">&copy; Copyright 2023</p>
        </div>
      </aside>
    </>
  );
};

export default Leftbar;
