import React from "react";

function Selector({ selected, setSelected }) {
  return (
    <div className="mx-auto flex w-full rounded-md border bg-white text-center text-black">
      <span
        className={`w-full cursor-pointer rounded-md font-bold transition ${selected === "Education" ? "bg-slate-700 text-white" : "hover:bg-gray-400"}`}
        onClick={() => setSelected("Education")}
      >
        Education
      </span>
      <span
        className={`w-full cursor-pointer rounded-md font-bold transition ${selected === "Work" ? "bg-slate-700 text-white" : "hover:bg-gray-400"}`}
        onClick={() => setSelected("Work")}
      >
        Work
      </span>
    </div>
  );
}

export default Selector;
