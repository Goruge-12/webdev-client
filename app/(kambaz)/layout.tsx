import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./kambaz.css";

export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="wd-kambaz-layout">
      <KambazNavigation />
      <main className="wd-kambaz-content">{children}</main>
    </div>
  );
}
