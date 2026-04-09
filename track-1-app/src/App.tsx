import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

export default function App() {
  const [input, setInput] = useState("");

  const addQuote = useMutation(api.quotes.addQuote);
  const quotes = useQuery(api.quotes.getQuotes);

  const handleSubmit = async () => {
    if (!input) return;
    await addQuote({ text: input });
    setInput("");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Core Review App</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Type something..."
      />

      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2">
        Submit
      </button>

      <ul className="mt-4">
        {quotes?.map((msg) => (
          <li key={msg._id}>{msg.text}</li>
        ))}
      </ul>
    </div>
  );
}
