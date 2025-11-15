"use client";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-zinc-100 dark:from-black dark:to-zinc-900 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-10 border border-zinc-200 dark:border-zinc-800">
        
        <div className="flex justify-center mb-6">
          <Image
            src="/next.svg"
            width={120}
            height={30}
            className="dark:invert"
            alt="Next.js Logo"
          />
        </div>

        {status !== "authenticated" && (
          <>
            <h1 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-2">
              Welcome to Authentication Demo
            </h1>
            <p className="text-center text-zinc-500 dark:text-zinc-400 mb-6">
              Sign in using any provider below
            </p>

            <div className="flex flex-col gap-3">

              <button
                onClick={() => signIn("google")}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium"
              >
                Sign in with Google
              </button>

              <button
                onClick={() => signIn("github")}
                className="w-full bg-gray-800 hover:bg-black text-white py-2 rounded-lg font-medium"
              >
                Sign in with GitHub
              </button>

              
            </div>
          </>
        )}
        {status === "authenticated" && (
          <div className="text-center">
            <Image
              src={session.user?.image || "/user.png"}
              width={80}
              height={80}
              className="rounded-full mx-auto border mt-4"
              alt="User"
            />

            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-3">
              {session.user?.name}
            </h2>

            <p className="text-zinc-500 dark:text-zinc-400 mb-6">
              {session.user?.email}
            </p>

            <button
              onClick={() => signOut()}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
