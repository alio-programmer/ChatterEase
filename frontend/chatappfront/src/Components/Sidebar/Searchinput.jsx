import React from "react";
import { IoSearch } from "react-icons/io5";
const Searchinput = () => {
  return (
    <form className="flex items-center gap-2">
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
      </label>
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearch className="w-6 h-6 outline-none"></IoSearch>
      </button>
    </form>
  );
};

export default Searchinput;
