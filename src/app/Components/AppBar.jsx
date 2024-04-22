import React from "react";

const AppBar = () => {
  return <div className="fixed w-full flex justify-between px-2 items-center mb-28 bg-slate-600 h-[56px]">
    <a className="text-white hover:cursor-pointer">Admin Dashboard</a>
    <div className="hidden lg:flex gap-4 items-center">
        <a className="text-white cursor-pointer rounded-md hover:bg-white hover:text-black px-2 py-2" >Home</a>
        <a className="text-white cursor-pointer rounded-md hover:bg-white hover:text-black px-2 py-2">Contact</a>
        <a className="text-white cursor-pointer rounded-md hover:bg-white hover:text-black px-2 py-2">Profile</a>
        <a className="text-white cursor-pointer rounded-md hover:bg-white hover:text-black px-2 py-2">About</a>
    </div>
  </div>;
};

export default AppBar;
