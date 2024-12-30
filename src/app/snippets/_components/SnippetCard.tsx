"use client";
import { Snippet } from "@/types";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Trash2, User } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import StarButton from "@/components/StarButton";

function SnippetCard({ snippet }: { snippet: Snippet }) {
  const { user } = useUser();
  const deleteSnippet = useMutation(api.snippets.deleteSnippet);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await deleteSnippet({ snippetId: snippet._id });
    } catch (error) {
      console.log("Error deleting snippet:", error);
      toast.error("Error deleting snippet");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <motion.div
      layout
      className="group relative"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/snippets/${snippet._id}`} className="h-full block">
        <div
          className="relative h-full bg-gradient-to-br from-[#1a1a2e] via-[#23234d] to-[#12122d] rounded-xl 
          border border-[#444] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/50 rounded-lg blur opacity-20 
                  group-hover:opacity-40 transition-all duration-500"
                    aria-hidden="true"
                  />
                  <div
                    className="relative p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30
                   group-hover:to-purple-500/30 transition-all duration-500"
                  >
                    <Image
                      src={`/${snippet.language}.png`}
                      alt={`${snippet.language} logo`}
                      className="w-8 h-8 object-contain relative z-10"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs font-medium">
                    {snippet.language}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock className="size-4" />
                    {new Date(snippet._creationTime).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div
                className="absolute top-5 right-5 z-10 flex gap-4 items-center"
                onClick={(e) => e.preventDefault()}
              >
                <StarButton snippetId={snippet._id} />

                {user?.id === snippet.userId && (
                  <div className="z-10" onClick={(e) => e.preventDefault()}>
                    <button
                      onClick={handleDelete}
                      disabled={isDeleting}
                      className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200
                                  ${
                                    isDeleting
                                      ? "bg-red-500/20 text-red-400 cursor-not-allowed"
                                      : "bg-gray-500/10 text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                                  }
                                `}
                    >
                      {isDeleting ? (
                        <div className="size-4 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin" />
                      ) : (
                        <Trash2 className="size-4" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
                  {snippet.title}
                </h2>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-gray-800/50">
                      <User className="size-4" />
                    </div>
                    <span className="truncate max-w-[160px]">{snippet.userName}</span>
                  </div>
                </div>
              </div>

              <div className="relative group/code">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-purple-500/10 rounded-lg opacity-0 0 transition-all" />
                <pre className="relative bg-black/30 rounded-lg p-4 overflow-hidden text-sm text-gray-300 font-mono line-clamp-3">
                  {snippet.code}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
export default SnippetCard;
