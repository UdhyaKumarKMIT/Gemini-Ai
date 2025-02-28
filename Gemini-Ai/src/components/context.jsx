import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const run = async (prompt) => {
    setLoading(true);
    try {
      const { GoogleGenerativeAI } = await import("@google/generative-ai");
      const genAI = new GoogleGenerativeAI("AIzaSyB7V7MomP31CTFFSIy-6ep01RLmIM7oD_U");
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const chatSession = await model.startChat({
        generationConfig: {
          temperature: 1,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 8192,
          responseMimeType: "text/plain",
        },
        history: [],
      });

      const result = await chatSession.sendMessage(prompt);
      setResultData(result.response.text || "No response received.");
      setPrevPrompts((prev) => [...prev, { prompt, response: result.response.text }]);
    } catch (error) {
      console.error("Error:", error);
      setResultData("Failed to fetch response.");
    }
    setLoading(false);
  };

  const onSent = async (prompt) => {
    if (!prompt.trim()) return;
    await run(prompt);
  };

  return (
    <Context.Provider
      value={{ prevPrompts, setPrevPrompts, onSent, loading, resultData, input, setInput }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
