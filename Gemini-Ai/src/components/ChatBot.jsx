import React, { useState } from "react";

const apiKey = "AIzaSyB7V7MomP31CTFFSIy-6ep01RLmIM7oD_U"; // Store this in an .env file securely

function ChatBot() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function run(inputText) {
    setLoading(true);
    try {
      const { GoogleGenerativeAI } = await import("@google/generative-ai");
      const genAI = new GoogleGenerativeAI(apiKey);

      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const chatSession = await model.startChat({
        generationConfig: {
          temperature: 1,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 8192,
          responseMimeType: "text",
        },
        history: [],
      });

      const result = await chatSession.sendMessage(inputText);
      setResponse(result.response.text);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Failed to");
    }
    setLoading(false);
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-10">Chat with AI</h2>
      <input
        type="text"
        className="border p-2 w-full rounded-md"
        placeholder="Ask something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="text"
        className="border p-2 w-full rounded-md"
        placeholder="Ask something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => run(input)}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Send"}
      </button>
      <div className="mt-4 p-2 bg-gray-100 rounded-md">
        <strong>Response:</strong>
        <p>{response || "No response yet"}</p>
      </div>
    </div>
  );
}

export default ChatBot;