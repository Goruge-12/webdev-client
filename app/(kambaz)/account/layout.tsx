
import type { ReactNode } from "react";
import AccountNavigation from "./Navigation";
import { AccountProvider } from "./AccountContext";

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AccountProvider>
      <div className="wd-account-layout">
        <AccountNavigation />

        <section className="wd-account-content">
          {children}
        </section>
      </div>
    </AccountProvider>
  );
}
