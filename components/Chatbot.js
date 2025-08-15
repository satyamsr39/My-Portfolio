"use client";
import React, { useState } from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMessage = { role: "bot", text: data.reply };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 bg-cyan-800/90 hover:bg-cyan-700 text-white text-2xl p-3 sm:p-4 rounded-full shadow-2xl z-50"
        onClick={() => setOpen(!open)}
        aria-label="Chatbot"
      >
        <HiOutlineChatBubbleLeftRight className="text-2xl sm:text-3xl" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-3 sm:right-6 bg-gray-900 border border-gray-700 text-white w-[90%] sm:w-80 md:w-84 h-[70vh] sm:h-96 rounded-xl shadow-xl flex flex-col z-50 max-w-md">
          <div className="p-3 border-b border-gray-700 font-semibold flex justify-between items-center">
            Gemini Chat
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-red-500">×</button>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded break-words ${
                  msg.role === "user"
                    ? "bg-cyan-800 text-white self-end ml-auto max-w-[80%]"
                    : "bg-gray-700 text-white self-start mr-auto max-w-[80%]"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-2 border-t border-gray-700 flex gap-2">
            <input
              className="flex-1 p-2 rounded bg-gray-800 border border-gray-600 text-white text-sm sm:text-base"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="bg-cyan-600 px-2 sm:px-3 rounded hover:bg-cyan-700 text-sm sm:text-base"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
