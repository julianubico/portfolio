import React, { ReactNode } from "react";

interface LogoProps {
  name: string;
  icon: ReactNode;
}

class Logo extends React.Component<LogoProps> {
  render() {
    return (
      <div className="flex h-12 w-40 flex-row items-center justify-center gap-x-5 rounded-2xl bg-gray-600 pb-1 opacity-85">
        <span className="poppins-regular mt-1">{this.props.name}</span>
        <span className="mt-0.5">{this.props.icon}</span>
      </div>
    );
  }
}

export default Logo;
