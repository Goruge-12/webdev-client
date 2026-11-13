
"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type AccountUser = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email?: string;
  dob?: string;
  role?: string;
};

type AccountContextValue = {
  currentUser: AccountUser | null;
  signin: (user: AccountUser) => void;
  signout: () => void;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentUser, setCurrentUser] =
    useState<AccountUser | null>(null);

  const signin = (user: AccountUser) => {
    setCurrentUser(user);
  };

  const signout = () => {
    setCurrentUser(null);
  };

  return (
    <AccountContext.Provider
      value={{ currentUser, signin, signout }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error(
      "useAccount must be used inside AccountProvider"
    );
  }

  return context;
}
