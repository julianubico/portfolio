import React from "react";

interface ProjectProps {
  name: string;
  description: string;
  technologies: string[];
  image: string;
}

class Logo extends React.Component<ProjectProps> {
  render() {
    return (
      <div className="flex flex-col gap-y-4 rounded-2xl border p-4 shadow shadow-white">
        <div>
          <img
            className="max-h-56 w-full rounded-md object-scale-down"
            src={this.props.image}
            alt="project"
          />
        </div>
        <div>
          <span className="text-lg font-bold">{this.props.name}</span>
        </div>
        <div>
          <span className="text-sm opacity-60">{this.props.description}</span>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {this.props.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xxs poppins-regular content-center rounded-sm bg-white px-2 text-black"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Logo;
