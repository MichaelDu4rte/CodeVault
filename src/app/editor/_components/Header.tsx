import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SignedIn } from "@clerk/nextjs";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import HeaderProfileBtn from "./HeaderProfileBtn";

async function Header() {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const user = await currentUser();

  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || "",
  });

  return (
    <header className="relative z-10 bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4 rounded-lg shadow-xl border-b border-gray-800">
  <div className="flex items-center justify-between">
    {/* Logo Section */}
    <div className="flex items-center gap-4">
      <Link href="/snippets" className="flex items-center gap-3 group">
        <div className="relative bg-gradient-to-br from-gray-800 to-black p-3 rounded-full ring-2 ring-purple-600/40 shadow-md group-hover:scale-105 transition-transform">
          <div className="w-6 h-6 bg-gradient-to-br from-purple-600 via-gray-800 to-black transform rotate-45"></div>
        </div>
        <div>
          <h1 className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-gray-300 to-blue-400 text-transparent bg-clip-text">
            CodeVault
          </h1>
          <p className="text-xs text-gray-500">Editor de código</p>
        </div>
      </Link>

      
    </div>

    {/* User Controls */}
    <div className="flex items-center gap-4">
      <LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />

      <SignedIn>
        <RunButton />
      </SignedIn>

      {convexUser?.isPro == false && (
        <Link
          href="/pricing"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/40 bg-gradient-to-br from-gray-900 via-black to-purple-900 shadow-lg hover:from-purple-800 hover:via-black hover:to-gray-900 hover:shadow-purple-700/50 transition"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-300">Pro</span>
        </Link>
      )}

      <ThemeSelector />
      <HeaderProfileBtn />
    </div>
  </div>
</header>

  );
}

export default Header;
