"use client";

import Link from "next/link";
import { FiUser, FiLogOut, FiLoader, FiLock } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { status, data } = useSession();

  const handleLogin = async () => {
    await signIn();
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-sm">
      <div className=" max-w-7xl mx-auto flex w-full items-center justify-between">
        <Link href={"/"}>
          <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
            <span className="text-blue-500">DEV</span> CONTROLE
          </h1>
        </Link>

        {status === "loading" && (
          <button className="animate-spin">
            <FiLoader size={26} color="#4b5563" />
          </button>
        )}

        {status === "unauthenticated" && (
          <button onClick={handleLogin}>
            <FiLock size={26} color="#4b5563" />
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex items-baseline gap-4">
            <Link className="duration-300 hover:opacity-60" href={"/dashboard"}>
              <FiUser size={30} color="#4b5563" />
            </Link>
            <Link href={"/dashboard"}>
              <FiLogOut
                className="duration-300 hover:opacity-60"
                size={30}
                color="#dc2626"
                onClick={handleLogout}
              />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
