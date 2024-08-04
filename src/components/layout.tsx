import { ReactNode } from "react";
import Bottombar from "./bottombar";

interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <div className="flex justify-center bg-slate-900 xs:hidden">
      <div className="layout-container min-w-full max-w-full bg-white dark:bg-neutral-800 md:min-w-[480px] md:max-w-[480px]">
        {children}
      <Bottombar />
      </div>     
    </div>
  );
}