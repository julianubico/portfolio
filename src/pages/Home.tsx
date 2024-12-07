import React from "react";
import { useState } from "react";
import { Name, Information } from "../components/Personal.tsx";
import Socials from "../components/Socials.tsx";
import Timeline from "../components/Timeline.tsx";
import Scroller from "../components/Scroller.tsx";

function Home() {
  const [selected, setSelected] = useState("Education");

  return (
    <div className="no-scrollbar mx-auto flex h-full max-w-3xl flex-col space-y-5 overflow-y-auto bg-white bg-opacity-5 pt-14 text-white">
      <Name />
      <Information />
      <Socials />
      <hr className="mx-auto w-11/12 border-white opacity-15" />
      <Timeline selected={selected} setSelected={setSelected} />
      <hr className="mx-auto w-11/12 border-white opacity-15" />
      <Scroller />
      <hr className="mx-auto w-11/12 border-white opacity-15" />
    </div>
  );
}

export default Home;
