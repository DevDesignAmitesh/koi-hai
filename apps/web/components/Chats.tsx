import { MessageProps } from "@repo/common/common";
import { useEffect, useRef } from "react";

interface ChatsProps {
  messages: MessageProps[];
}

export const Chats = ({ messages }: ChatsProps) => {
  const entriesEndRef = useRef<HTMLDivElement>(null);

  // 🔹 mock current user
  const userId = "userA";

  const formateDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString([], { month: "short", day: "numeric" });
    }
  };

  // groups chats by date
  const groupedEntries: { date: string; messages: MessageProps[] }[] = [];

  messages.forEach((msg) => {
    const date = formateDate(msg.createdAt);
    const existingChats = groupedEntries.find((grp) => grp.date === date);

    if (existingChats) {
      existingChats.messages.push(msg);
    } else {
      groupedEntries.push({ date, messages: [msg] });
    }
  });

  useEffect(() => {
    entriesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-137.5 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 && (
        <p className="text-center text-sm dark:text-neutral-400 text-neutral-500 mt-8">
          Your thoughts, your space
        </p>
      )}

      {groupedEntries.map((group) => (
        <div key={group.date}>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 text-center mb-3">
            {group.date}
          </p>

          <div className="space-y-3">
            {group.messages.map((msg) => {
              const isMe = msg.senderId === userId;

              return (
                <div
                  key={msg.id}
                  className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2
                    ${
                      isMe
                        ? "rounded-br-md dark:bg-neutral-800 bg-neutral-200"
                        : "rounded-bl-md dark:bg-neutral-700 bg-neutral-300"
                    }`}
                  >
                    {/* status */}
                    <p
                      className={`text-[10px] mb-1 font-medium
                      ${
                        isMe
                          ? "text-right dark:text-neutral-400 text-neutral-600"
                          : "text-left dark:text-neutral-400 text-neutral-700"
                      }`}
                    >
                      {isMe ? "YOU" : "THEM"}
                    </p>

                    {/* message */}
                    <p
                      className="text-sm whitespace-pre-wrap wrap-break-words 
                      dark:text-neutral-100 text-neutral-800"
                    >
                      {msg.message}
                    </p>

                    {/* time */}
                    <p
                      className={`text-[10px] mt-1
                      ${
                        isMe
                          ? "text-right dark:text-neutral-400 text-neutral-600"
                          : "text-left dark:text-neutral-300 text-neutral-700"
                      }`}
                    >
                      {new Date(msg.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div ref={entriesEndRef} />
    </div>
  );
};
