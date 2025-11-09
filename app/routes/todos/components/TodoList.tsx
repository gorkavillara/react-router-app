// app/routes/todos/components/TodoList.tsx

import type { Todo } from "../models";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-md px-4 py-2 shadow-sm"
        >
          <span className="text-gray-700">{index + 1}. {todo.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
