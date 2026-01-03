"use client";

import { ThemeButton } from "../components/ThemeButton";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";
import { notesStorage, Todo } from "../utils/notes-storage";

export const LandingPage = () => {
  if (typeof window === "undefined") return;
  
  const todos = notesStorage.getTodos();
  return (
    <div className="relative h-screen w-full">
      {/* header */}
      <div className="w-full p-3 flex justify-between items-center border-b border-neutral-300 dark:border-neutral-700">
        <h3 className="text-lg font-semibold dark:text-neutral-200 text-neutral-800">
          Notes
        </h3>
        <ThemeButton />
      </div>

      {/* all todos */}
      <div className="w-full mt-2 px-3">
        {todos.length > 0 ? (
          <TodoList todos={todos} />
        ) : (
          <p className="text-[14px] font-semibold dark:text-neutral-400 text-neutral-700 w-full text-center mt-10">
            No notes yet
          </p>
        )}
      </div>

      {/* create todo button */}
      <Link
        href={"/note/new"}
        className="absolute bottom-5 right-5 p-4 cursor-pointer hover:opacity-90 rounded-full dark:bg-neutral-200 dark:text-neutral-800 bg-neutral-900 text-neutral-100 text-2xl"
      >
        <IoMdAdd />
      </Link>
    </div>
  );
};

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div className="grid w-full">
      {(todos ?? []).map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const TodoItem = ({ todo }: { todo: Todo }) => {
  const indianTime = new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date(todo?.createdAt));
  return (
    <Link
      href={`/note/${todo.id}`}
      className="flex justify-between items-center px-2 py-4 dark:hover:bg-neutral-800 hover:bg-neutral-100 cursor-pointer text-neutral-500 dark:text-neutral-400"
    >
      <div className="flex flex-col items-start">
        <h4 className="text-[15px] font-medium dark:text-neutral-200 text-neutral-900">
          {todo.title}
        </h4>
        <p className="text-xs">{todo.content.slice(0, 200)}...</p>
      </div>
      <p className="text-xs">{indianTime}</p>
    </Link>
  );
};
