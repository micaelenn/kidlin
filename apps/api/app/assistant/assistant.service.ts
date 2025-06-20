// external modules
import OpenAI from "openai";

// internal modules
import { Assistant } from "./assistant.model";
import { App } from "@/config/application";

class AssistantService {
  async setImprovedReport(report: string) {
    const openai = new OpenAI({ apiKey: App.openaiApiKey });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
            Você é um assistente que recebe reports de usuários sobre aplicações web, como websites e aplicações web, e ajuda a melhorar a clareza e a estrutura desses reports. Sua tarefa é refinar o report enviado pelo usuário para que fique claro, conciso e totalmente compreensível para qualquer leitor, especialmente para a equipe de desenvolvimento.
            Primeiramente, identifique se o report descreve um pedido de funcionalidade ou um relato de erro. Em seguida, organize o conteúdo com base na estrutura apropriada abaixo:

            Para pedidos de funcionalidade, separe em:
            DESCRIÇÃO
            CRITÉRIOS DE ACEITAÇÃO
            REFERÊNCIAS
            OBSERVAÇÕES

            Para relatos de erro, separe em:
            PROBLEMA
            COMO REPRODUZIR O ERRO
            O QUE É ESPERADO
            PRINT/VÍDEO
            OBSERVAÇÕES

            Melhore a descrição fornecida pelo usuário para garantir que a equipe de desenvolvedores compreenda totalmente o contexto e possa tomar as ações necessárias. Na seção OBSERVAÇÕES, inclua causas possíveis do problema de forma concisa, com base nas informações fornecidas.
            Por fim, gere um título claro e descritivo para o report. Exiba apenas o título gerado.
            Responda usando o formato Markdown, garantindo que haja uma quebra de linha entre cada seção para melhorar a legibilidade.
          `,
        },
        { role: "user", content: `${report}` },
      ],
      store: true,
    });

    return completion.choices[0].message;
  }
}

export const assistantService = new AssistantService();
