"use client";

import { useState } from "react";
import { BackButton } from "../components/BackButton";
import { TextArea } from "../components/TextArea";
import { MessageProps } from "@repo/common/common";
import { Chats } from "../components/Chats";

const now = new Date();

const getDate = (daysAgo: number) => {
  const d = new Date(now);
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString();
};

const dummyMessages: MessageProps[] = [
  // ---- Day before yesterday ----
  {
    id: "1",
    senderId: "userA",
    message: "Hey, how was your day?",
    createdAt: getDate(2),
  },
  {
    id: "2",
    senderId: "userB",
    message: "Pretty good! Worked a lot though 😅",
    createdAt: getDate(2),
  },
  {
    id: "3",
    senderId: "userA",
    message: "Same here, but glad the day is over.",
    createdAt: getDate(2),
  },

  // ---- Yesterday ----
  {
    id: "4",
    senderId: "userB",
    message: "Did you finish that feature?",
    createdAt: getDate(1),
  },
  {
    id: "5",
    senderId: "userA",
    message: "Almost! Just fixing some UI bugs.",
    createdAt: getDate(1),
  },
  {
    id: "6",
    senderId: "userB",
    message: "Nice, can’t wait to see it.",
    createdAt: getDate(1),
  },

  // ---- Today ----
  {
    id: "7",
    senderId: "userA",
    message: "Good morning 🌞",
    createdAt: getDate(0),
  },
  {
    id: "8",
    senderId: "userB",
    message: "Morning! Ready for the day?",
    createdAt: getDate(0),
  },
  {
    id: "9",
    senderId: "userA",
    message: "Always! Let’s ship something today 🚀",
    createdAt: getDate(0),
  },
];

export const DiaryPage = () => {
  const [message, setMessage] = useState<string>("");

  const [messages, setMessages] = useState<MessageProps[]>(dummyMessages);

  return (
    <div className="relative h-screen w-full">
      {/* header */}
      <div
        className="w-full py-4 gap-4 flex justify-start items-center 
          border-b border-neutral-300 
          dark:border-neutral-700"
      >
        <BackButton href="/private" />

        <p className="text-[15px] font-semibold dark:text-neutral-100 text-neutral-800">
          Diary
        </p>
      </div>

      {/* rendering all the chats */}
      <Chats messages={messages} />

      {/* handling user input */}
      <TextArea value={message} onChange={(val) => setMessage(val)} />
    </div>
  );
};
