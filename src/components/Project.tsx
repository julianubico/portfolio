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
      <div className="flex flex-col rounded-2xl border shadow shadow-white">
        <div className="mx-4">
          <img
            className="h-64 w-full rounded-t-2xl object-contain"
            src={this.props.image}
            alt="project"
          />
        </div>
        <div className="p-4">
          <span className="text-lg font-bold">{this.props.name}</span>
        </div>
        <div className="p-4">
          <span className="text-sm opacity-60">{this.props.description}</span>
        </div>
        <div className="flex flex-wrap gap-2 p-4">
          {this.props.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-gray-200 px-2 py-1 text-sm text-gray-800"
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
