import { ReactNode, useEffect, useState } from "react";
import { isWindow } from './utils'

type RouteProps = {
  path: string
  component: ReactNode
}

const Route = ({ path, component }: RouteProps) => {
  const [currentPath, setCurrentPath] = useState( isWindow() && window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("navigate", onLocationChange);
    return () => window.removeEventListener("navigate", onLocationChange);
  }, []);
  
  return currentPath === path ? component : null;
};

export default Route;