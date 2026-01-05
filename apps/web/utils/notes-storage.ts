export interface Todo {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

class NotesStorage {
  public getTodos() {
    const LOCAL_TODO: Todo[] = JSON.parse(
      localStorage.getItem("todos") ?? "[]"
    );

    return LOCAL_TODO;
  }

  private saveTodos(todos: Todo[]) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  public addTodo(todo: Todo) {
    const todos = this.getTodos();
    todos.push({ ...todo, title: todo.title === "" ? "Untitled" : todo.title });

    this.saveTodos(todos);
  }

  public editTodo(id: string, todo: Todo) {
    const todos = this.getTodos();
    const local_todo = todos.find((todo) => todo.id === id);

    if (local_todo) {
      const filterdTodos = todos.filter((todo) => todo.id !== id);
      const newTodo: Todo = { ...local_todo, ...todo };
      filterdTodos.push(newTodo);
      this.saveTodos(filterdTodos);
    }
  }

  public getTodo(id: string | null) {
    const todos = this.getTodos();

    const todo = todos.find((todo) => todo.id === id);

    return todo ?? null;
  }

  public deleteTodo(id: string) {
    const todos = this.getTodos();
    const local_todo = todos.find((todo) => todo.id === id);

    if (local_todo) {
      const filterdTodos = todos.filter((todo) => todo.id !== id);
      this.saveTodos(filterdTodos);
    }
  }
}

export const notesStorage = new NotesStorage();
