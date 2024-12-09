import React from "react";
import Project from "./Project.tsx";

function Projects() {
  return (
    <div className="mx-5 flex flex-col gap-y-5">
      <span className="font-mono text-xl italic opacity-70">
        cool stuff i've worked on
      </span>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Project
          name="DirtCraft Modded Minecraft Network"
          image="/assets/dirtcraft.png"
          description="Founder of DirtCraft, which achieved the #1 global ranking among modded minecraft networks with over 200,000 unique players."
          technologies={["Java", "MySQL", "NGINX", "Jenkins", "Linux"]}
        />
        <Project
          name="Pharma Vision"
          image="/assets/pharma-vision.png"
          description="Healthcare software for prescription tracking using React and PostgreSQL, achieving 95% accuracy in real-time video medication detection."
          technologies={[
            "JavaScipt",
            "React",
            "PostgreSQL",
            "PyTorch",
            "OpenCV",
          ]}
        />
        <Project
          name="Server Administration Panel"
          image="/assets/dirtpanel.png"
          description="Game server administration panel with real-time monitoring, control, and a dedicated SFTP server for granular permissions."
          technologies={["React", "Express", "Java", "MySQL", "WebSocket"]}
        />
      </div>
    </div>
  );
}

export default Projects;
