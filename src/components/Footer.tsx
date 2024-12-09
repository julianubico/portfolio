import React from "react";

function Footer() {
  return (
    <div className="mx-5 flex flex-row justify-between pb-5">
      <span className="italic opacity-60">
        {"made with three.js, react and tailwind css"}
      </span>
      <img
        src="/assets/bmw.png"
        className="h-6 w-20 object-contain opacity-100"
        alt="bmw"
      />
    </div>
  );
}

export default Footer;
