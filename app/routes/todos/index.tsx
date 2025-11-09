import { Form, type ActionFunctionArgs } from "react-router";
import type { Todo } from "./models";
import TodoList from "./components/TodoList";

const todos: Todo[] = [];

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  todos.push({
    title: body.get("title")!.toString(),
  });
  return todos;
}

export function loader() {
  return todos;
}

export default function Todos({ loaderData }: { loaderData: Todo[] }) {
  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Todos</h1>

      <TodoList todos={loaderData} />

      <Form method="post" className="mt-4 flex gap-3">
        <input
          type="text"
          name="title"
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Create
        </button>
      </Form>
    </div>
  );
}
