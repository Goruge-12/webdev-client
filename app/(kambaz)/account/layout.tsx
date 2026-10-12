import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="wd-account-layout">
      <AccountNavigation />
      <section className="wd-account-content">{children}</section>
    </div>
  );
}
