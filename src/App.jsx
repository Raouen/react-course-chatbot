import { useState } from "react";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import vhdlData from "./data/vhdlData";
import "./App.css";

const App = () => {
  const [chats, setChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);

  const currentChat = chats.find((chat) => chat.id === currentChatId);

  const findAnswer = (question) => {
    const lowerQuestion = question.toLowerCase();

    let bestMatch = null;
    let highestScore = 0;

    vhdlData.forEach((item) => {
      let score = 0;

      item.keywords.forEach((keyword) => {
        if (lowerQuestion.includes(keyword.toLowerCase())) {
          score++;
        }
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    });

    if (bestMatch) {
      return bestMatch.answer;
    }

    return "I'm sorry, I couldn't find an answer to that question in the course.";
  };

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: [],
    };

    setChats((previousChats) => [...previousChats, newChat]);
    setCurrentChatId(newChat.id);
  };

  const handleUserMessage = (message) => {
    const answer = findAnswer(message);

    const userMessage = {
      role: "user",
      text: message,
    };

    const botMessage = {
      role: "model",
      text: answer,
    };

    setChats((previousChats) =>
      previousChats.map((chat) => {
        if (chat.id === currentChatId) {
          const newTitle =
            chat.messages.length === 0
              ? message.length > 25
                ? message.substring(0, 25) + "..."
                : message
              : chat.title;

          return {
            ...chat,
            title: newTitle,
            messages: [
              ...chat.messages,
              userMessage,
              botMessage,
            ],
          };
        }

        return chat;
      })
    );
  };

  const handleNewChat = () => {
    createNewChat();
  };

  return (
    <div className="app-container">

      <aside className="sidebar">

        <button className="new-chat-button" onClick={handleNewChat}>
          + New Chat
        </button>

        <div className="history-container">
          <h3>Chat History</h3>

          {chats.length === 0 ? (
            <p className="empty-history">
              No previous chats
            </p>
          ) : (
            chats.map((chat) => (
              <button
                key={chat.id}
                className={`history-item ${
                  chat.id === currentChatId ? "active-chat" : ""
                }`}
                onClick={() => setCurrentChatId(chat.id)}
              >
                💬 {chat.title}
              </button>
            ))
          )}
        </div>

      </aside>

      <main className="main-content">

        <div className="chatbot-popup">

          <div className="chat-header">
            <div className="header-info">
              <div className="bot-icon">🤖</div>
              <h2 className="logo-text">Chatbot</h2>
            </div>
          </div>

          <div className="chat-body">

            {!currentChat || currentChat.messages.length === 0 ? (
              <div className="message bot-message">
                <p className="message-text">
                  Hello! 👋
                  <br />
                  How may i help you today.
                </p>
              </div>
            ) : (
              currentChat.messages.map((chat, index) => (
                <ChatMessage
                  key={index}
                  chat={chat}
                />
              ))
            )}

          </div>

          <div className="chat-footer">
            {currentChat ? (
              <ChatForm
                setChatHistory={(update) => {
                  setChats((previousChats) => {
                    const chat = previousChats.find(
                      (chat) => chat.id === currentChatId
                    );

                    if (!chat) return previousChats;

                    const history =
                      typeof update === "function"
                        ? update(chat.messages)
                        : update;

                    const lastMessage =
                      history[history.length - 1];

                    if (lastMessage?.role === "user") {
                      const answer = findAnswer(
                        lastMessage.text
                      );

                      return previousChats.map((item) =>
                        item.id === currentChatId
                          ? {
                              ...item,
                              messages: [
                                ...history,
                                {
                                  role: "model",
                                  text: answer,
                                },
                              ],
                            }
                          : item
                      );
                    }

                    return previousChats;
                  });
                }}
              />
            ) : (
              <button
                className="start-chat-button"
                onClick={createNewChat}
              >
                Start a new chat
              </button>
            )}
          </div>

        </div>

      </main>

    </div>
  );
};

export default App;