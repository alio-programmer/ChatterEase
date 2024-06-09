import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import UseGetconversation from "../../Hooks/UseGetconversation";
import toast from "react-hot-toast";
const Searchinput = () => {
  const [search, setsearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = UseGetconversation();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setsearch("");
    } else {
      toast.error("No such user found");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handlesubmit}>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
      </label>
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearch className="w-6 h-6 outline-none"></IoSearch>
      </button>
    </form>
  );
};

export default Searchinput;
