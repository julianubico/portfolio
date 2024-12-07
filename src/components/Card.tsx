import React from "react";

interface CardProps {
  iconImage: string;
  name: string;
  title: string;
  dates: string;
  link: string;
}

class Card extends React.Component<CardProps> {
  render() {
    return (
      <a
        className="flex items-center gap-x-4 transition-all hover:translate-x-1"
        href={this.props.link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={this.props.iconImage}
          alt="icon"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-xs opacity-60">{this.props.dates}</span>
          <span>{this.props.name}</span>
          <span className="text-sm">{this.props.title}</span>
        </div>
      </a>
    );
  }
}

export default Card;
