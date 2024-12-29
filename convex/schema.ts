import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"; 

// Define o schema do banco de dados
export default defineSchema({

  // Tabela para armazenar informações dos usuários
  users: defineTable({
    userId: v.string(), // ID do usuário fornecido pelo Clerk
    email: v.string(), // E-mail do usuário
    name: v.string(), // Nome do usuário
    isPro: v.boolean(), // Indica se o usuário possui uma conta Pro
    proSince: v.optional(v.number()), // (Opcional) Data em que o usuário se tornou Pro (timestamp)
    lemonSqueezyCustomerId: v.optional(v.string()), // (Opcional) ID do cliente no Lemon Squeezy
    lemonSqueezyOrderId: v.optional(v.string()), // (Opcional) ID do pedido no Lemon Squeezy

  }).index("by_user_id", ["userId"]), // Cria um índice para buscar registros pelo `userId`

  // Tabela para armazenar execuções de código dos usuários
  codeExecutions: defineTable({
    userId: v.string(), // ID do usuário que executou o código
    language: v.string(), // Linguagem de programação usada
    code: v.string(), // Código enviado pelo usuário
    output: v.optional(v.string()), // (Opcional) Resultado da execução do código
    error: v.optional(v.string()), // (Opcional) Erro gerado durante a execução, se houver

  }).index("by_user_id", ["userId"]), // Índice para buscar execuções por `userId`

  // Tabela para armazenar snippets (códigos) criados pelos usuários
  snippets: defineTable({

    userId: v.string(), // ID do usuário que criou o snippet
    title: v.string(), // Título do snippet
    language: v.string(), // Linguagem de programação do snippet
    code: v.string(), // Código do snippet
    userName: v.string(), // Nome do usuário que criou o snippet (armazenado para exibição)

  }).index("by_user_id", ["userId"]), // Índice para buscar snippets por `userId`

  // Tabela para armazenar comentários em snippets
  snippetComments: defineTable({

    snippetId: v.id("snippets"), // ID do snippet ao qual o comentário pertence
    userId: v.string(), // ID do usuário que fez o comentário
    userName: v.string(), // Nome do usuário que fez o comentário
    content: v.string(), // Conteúdo do comentário (HTML formatado)
    
  }).index("by_snippet_id", ["snippetId"]), // Índice para buscar comentários por `snippetId`

  // Tabela para armazenar estrelas (likes ou favoritos) atribuídas a snippets
  stars: defineTable({
    userId: v.string(), // ID do usuário que deu a estrela
    snippetId: v.id("snippets"), // ID do snippet que recebeu a estrela
  })
    .index("by_user_id", ["userId"]) // Índice para buscar estrelas por `userId`
    .index("by_snippet_id", ["snippetId"]) // Índice para buscar estrelas por `snippetId`
    .index("by_user_id_and_snippet_id", ["userId", "snippetId"]), // Índice composto para evitar duplicação de estrelas por usuário e snippet
});
