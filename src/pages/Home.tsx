import React from "react";
import { useState } from "react";
import { Name, Information } from "../components/Personal.tsx";
import Socials from "../components/Socials.tsx";
import Timeline from "../components/Timeline.tsx";
import Scroller from "../components/Scroller.tsx";
import Projects from "../components/Projects.tsx";
import Footer from "../components/Footer.tsx";

function Home() {
  const [selected, setSelected] = useState("Education");

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-y-5 bg-white bg-opacity-5 pt-14 text-white">
      <div className="mx-10 flex flex-col gap-y-3">
        <Name />
        <Information />
        <Socials />
      </div>
      <hr className="mx-auto w-11/12 border-white opacity-15" />
      <Timeline selected={selected} setSelected={setSelected} />
      <hr className="mx-auto w-11/12 border-white opacity-15" />
      <Scroller />
      <hr className="mx-auto w-11/12 border-white opacity-15" />
      <Projects />
      <hr className="mx-auto w-11/12 border-white opacity-15" />
      <Footer />
    </div>
  );
}

export default Home;
