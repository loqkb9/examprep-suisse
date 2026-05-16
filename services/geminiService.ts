import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are 'ExamBot', a helpful and friendly assistant for 'HEC Python Academy', a tutoring service.
We offer an intensive review course via Réunion Teams for students preparing for exams:

1. **Programmation Course (Exam Prep)**
   - Target: 1st year HEC Lausanne students.
   - Content: Variables, types, logic, loops, functions, file handling, NumPy, Pandas, visualization.
   - Format: 4 hours, group Réunion Teams.
   - Price: 80 CHF.
   - Includes PDF materials, exercises, and membership area access.

**General Info:**
- Classes are limited to guarantee quality.
- Payment via Stripe (Twint, Credit Card) or Bank Transfer.
- Cancellation policy: 48h notice for full refund.

**Your Goal:**
Answer student questions briefly and encourage them to book a session. If they ask about prices, confirm it's 80 CHF per morning session. Be encouraging and professional.
`;

export const sendMessageToGemini = async (message: string, history: ChatMessage[]): Promise<string> => {
  const API_KEY = process.env.GEMINI_API_KEY || '';
  
  if (!API_KEY) {
    return "Je suis désolé, le service de chat est temporairement indisponible (clé API manquante).";
  }

  // Truncate history to the last 10 messages to avoid token limit errors
  const truncatedHistory = history.slice(-10);

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const chat = ai.chats.create({
      model: "gemini-1.5-flash", 
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: truncatedHistory,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Désolé, j'ai rencontré une erreur. Veuillez réessayer plus tard.";
  }
};