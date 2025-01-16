'use client';

import { useQuery } from 'convex/react';
import { useParams, useRouter } from 'next/navigation';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';
import SnippetLoadingSkeleton from './_components/SnippetLoadingSkeleton';
import NavigationHeader from '@/components/NavigationHeader';
import { Clock, Code, MessageSquare, Play, User } from 'lucide-react';
import { Editor } from '@monaco-editor/react';
import { defineMonacoThemes, LANGUAGE_CONFIG } from '@/app/editor/_constants';
import CopyButton from './_components/CopyButton';
import Comments from './_components/Comments';
import Image from 'next/image';
import Head from 'next/head';

function SnippetDetailPage() {
  const snippetId = useParams().id;
  const router = useRouter();

  const snippet = useQuery(api.snippets.getSnippetById, {
    snippetId: snippetId as Id<'snippets'>,
  });
  const comments = useQuery(api.snippets.getComments, {
    snippetId: snippetId as Id<'snippets'>,
  });

  if (snippet === undefined) return <SnippetLoadingSkeleton />;

  const handleUseSnippet = () => {
    localStorage.setItem(`editor-code-${snippet.language}`, snippet.code);
    router.push('/editor');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#121218] to-[#1a1a1f]">
      <Head>
        <meta
          name="description"
          content={`${snippet.title} Código compartilhado por um ${snippet.userName}`}
        />
        <meta property="og:title" content={snippet.title} />
        <meta property="og:description" content={snippet.title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`/${snippet.language}.png`} />
        <meta
          property="og:url"
          content={`https://codevault.com.br/snippets/${snippetId}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={snippet.title} />
        <meta
          name="twitter:description"
          content={`Código sobre ${snippet.title} em ${snippet.language}`}
        />
        <meta name="twitter:image" content={`/${snippet.language}.png`} />
      </Head>

      <div className="max-w-[1800px] mx-auto p-4">
        <NavigationHeader />
      </div>

      <main className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Cabeçalho */}
          <div className="bg-[#1e1e22] border border-[#3a3a42] rounded-2xl p-6 sm:p-8 mb-6 backdrop-blur-xl hover:shadow-2xl transition-all">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-xl bg-[#2d2d32] p-2.5 shadow-md">
                  <Image
                    src={`/${snippet.language}.png`}
                    alt={`${snippet.language} logo`}
                    width={50}
                    height={50}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-semibold text-white mb-2  transition-colors">
                    {snippet.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#b3b3b8]">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#808086]" />
                      <span className="text-[#b3b3b8]">{snippet.userName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#808086]" />
                      <span className="text-[#b3b3b8]">
                        {new Date(snippet._creationTime).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#808086]" />
                      <span className="text-[#b3b3b8]">
                        {comments?.length} comentários
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center px-3 py-1.5 bg-[#2d2d32] text-[#b3b3b8] rounded-lg text-sm font-medium">
                {snippet.language}
              </div>
            </div>
          </div>

          {/* Editor de Código */}
          <div className="mb-8 rounded-2xl overflow-hidden border border-[#ffffff0a] bg-[#121218] shadow-xl focus-within:shadow-2xl focus-within:scale-105 transition-all">
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#ffffff0a]">
              <div className="flex items-center gap-2 text-[#808086]">
                <Code className="w-4 h-4" />
                <span className="text-sm font-medium">Código Fonte</span>
              </div>
              <div className="flex items-center gap-4 ">
                <CopyButton code={snippet.code} />

                <button
                  onClick={handleUseSnippet}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl opacity-100 transition-opacity group-hover:opacity-90"
                >
                  <Play className="w-4 h-4 text-white/90 transition-transform group-hover:scale-110 group-hover:text-white" />
                </button>
              </div>
            </div>
            <Editor
              height="500px"
              language={LANGUAGE_CONFIG[snippet.language].monacoLanguage}
              value={snippet.code}
              theme="vs-dark"
              beforeMount={defineMonacoThemes}
              options={{
                minimap: { enabled: false },
                fontSize: 16,
                readOnly: true,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                padding: { top: 26 },
                renderWhitespace: 'selection',
                fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
                fontLigatures: true,
              }}
            />
          </div>

          {/* Comentários */}
          <Comments snippetId={snippet._id} />
        </div>
      </main>
    </div>
  );
}
export default SnippetDetailPage;
