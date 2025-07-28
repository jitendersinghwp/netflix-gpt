import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error("Gemini API key is not set in environment variables!");
}

const googleGenAI = new GoogleGenAI({
  apiKey: apiKey,
});

export default googleGenAI;