export function EditorPanelSkeleton() {
    return (
      <div className="relative bg-[#121212] p-4 rounded-2xl">
        <div className="bg-[#1e1e2e] p-4 rounded-xl border border-[#333]">
          {/* Header Skeleton */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#333]" />
              <div className="w-32 h-4 bg-white/5 rounded" />
            </div>
            <div className="flex items-center gap-4">
              {/* Font Size Skeleton */}
              <div className="flex items-center gap-3 bg-[#333] px-4 py-2 rounded-md">
                <div className="w-4 h-4 bg-white/5 rounded" />
                <div className="flex items-center gap-3">
                  <div className="w-20 h-1 bg-gray-600 rounded-lg" />
                  <div className="w-12 h-4 bg-white/5 rounded" />
                </div>
              </div>
  
              {/* Share Button Skeleton */}
              <div className="w-32 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-md" />
            </div>
          </div>
  
          {/* Editor Skeleton */}
          <div className="relative group rounded-lg overflow-hidden ring-1 ring-[#333]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-xl blur-2xl" />
            <div className="h-[450px] bg-[#1e1e2e]/50 backdrop-blur-sm p-4">
              {/* Code line skeletons */}
              {[...Array(15)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-4 bg-white/5 rounded`} />
                  <div
                    className={`h-4 bg-white/5 rounded`}
                    style={{ width: `${Math.random() * 60 + 10}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  