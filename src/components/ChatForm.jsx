import { useRef } from "react";

const ChatForm = ({ setChatHistory }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();

    if (!userMessage) return;

    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      {
        role: "user",
        text: userMessage,
      },
    ]);
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Ask something about VHDL..."
        className="message-input"
        required
      />

      <button type="submit" className="material-symbols-rounded">
        arrow_upward
      </button>
    </form>
  );
};

export default ChatForm;