import React from "react";

const name = <div className="mx-5 text-5xl">Julian Ubico</div>;
const title = <div className="mx-5 text-2xl">Software Engineer</div>;
const location = <div className="mx-5 text-lg">Miami, FL</div>;

function Name() {
  return <div>{name}</div>;
}

function Information() {
  return (
    <div>
      {title}
      {location}
    </div>
  );
}

export { Name, Information };
