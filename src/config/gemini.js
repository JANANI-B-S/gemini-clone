// config/gemini.js
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCOsgEwI8iLcE4z1IcCfZdVCcyFcMQD0jU", // Replace this with env variable in production
});

const gemini = async (prompt) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Something went wrong!";
  }
};

export default gemini;
