import { SignInButton } from '@clerk/nextjs';
import { LogIn } from 'lucide-react';

function LoginButton() {
  return (
    <SignInButton mode="modal">
      <button
        className="flex items-center gap-3 px-3 py-3 bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white rounded-2xl
             transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl shadow-purple-500/30"
      >
        <LogIn className="w-5 h-5 transition-transform" />
        <span className="text-lg font-semibold">Login</span>
      </button>
    </SignInButton>
  );
}

export default LoginButton;
