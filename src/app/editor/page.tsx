import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1e1e2e] to-[#0a0a0f] opacity-50 blur-lg z-0"></div>

      <div className="relative max-w-[1800px] mx-auto p-4 z-10">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
