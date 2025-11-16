"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="text-xl font-bold">
        <Link href="/">MyAuthApp</Link>
      </div>

      <div className="flex items-center gap-4">
        {status === "loading" ? (
          <span>Loading...</span>
        ) : session ? (
          <>
            <span>{session.user?.name}</span>
            {session.user?.image && (
              <img
                src={session.user.image}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            )}
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => signIn("google")}
              className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transition"
            >
              Sign In Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="bg-gray-800 hover:bg-black px-3 py-1 rounded transition"
            >
              Sign In GitHub
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
