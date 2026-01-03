"use client";

import { notesStorage, Todo } from "../utils/notes-storage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "../components/BackButton";

export const CreateOrEditNote = ({ id }: { id: string | null }) => {
  const todo = notesStorage.getTodo(id);

  const router = useRouter();

  const [formData, setFormData] = useState<Todo>({
    id: todo ? todo.id : crypto.randomUUID(),
    title: todo ? todo.title : "",
    content: todo ? todo.content : "",
    createdAt: new Date(),
  });

  const handleChange = (value: string, index: keyof Todo) => {
    setFormData((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.title === "register karo") {
      router.push("/register");
      return;
    }

    if (formData.title === "login karo") {
      router.push("/login");
      return;
    }

    // another check for checking if the title matches pair-phrase.

    if (todo) {
      notesStorage.editTodo(todo.id, formData);
    } else {
      notesStorage.addTodo(formData);
    }

    router.push("/");
  };

  const handleDelete = (id: string) => {
    notesStorage.deleteTodo(id);
    router.push("/");
  };

  return (
    <div className="relative h-screen w-full">
      {/* header */}
      <div
        className="w-full py-4 flex justify-between items-center 
          border-b border-neutral-300 
          dark:border-neutral-700"
      >
        <BackButton href="/" />

        <div className="flex justify-center items-center gap-4">
          {todo && (
            <button
              onClick={() => handleDelete(todo.id)}
              className="px-4 py-2 text-[14px] font-semibold rounded-md border
            dark:border-neutral-100 dark:text-neutral-100 
            border-neutral-700 text-neutral-700"
            >
              Delete
            </button>
          )}
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-[14px] font-semibold rounded-md
            dark:bg-neutral-100 dark:text-neutral-800 
            bg-neutral-700 text-neutral-100"
          >
            Save
          </button>
        </div>
      </div>

      {/* todo create/edit */}
      <div className="flex flex-col justify-start items-start gap-4 px-4 pt-2">
        <input
          onChange={(e) => handleChange(e.target.value, "title")}
          className="text-xl font-semibold outline-none w-full py-2
          dark:placeholder:text-neutral-400 dark:text-neutral-200"
          placeholder="Title"
          value={formData.title}
        />

        <textarea
          onChange={(e) => handleChange(e.target.value, "content")}
          className="h-140 w-full overflow-y-auto outline-none resize-none"
          placeholder="Start writing....."
          value={formData.content}
        />
      </div>
    </div>
  );
};
