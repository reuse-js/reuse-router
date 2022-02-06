import {  ReactNode, SyntheticEvent } from "react";

type LinkProps = {
  to: string
  children: ReactNode
}

const Link = ({ to, children }: LinkProps) => {
  const preventReload = (event: SyntheticEvent) => {
    event.preventDefault();
    window.history.pushState({}, "", to);
    const navigationEvent = new PopStateEvent("navigate");
    window.dispatchEvent(navigationEvent);
  };
  return (
    <a href={to} onClick={preventReload}>
      {children}
    </a>
  );
};

export default Link;