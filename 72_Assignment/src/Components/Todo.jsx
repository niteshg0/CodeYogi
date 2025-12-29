import { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "Learn React",
      isCompleted: false,
    },
    {
      id: 2,
      todo: "Learn JavaScript",
      isCompleted: false,
    },
    {
      id: 3,
      todo: "Learn CSS",
      isCompleted: true,
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const handleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      {
        id: Math.random(),
        todo: newTodo,
        isCompleted: false,
      },
    ]);

    setIsAdding(false);
    setNewTodo("");
  };

  const handleRefresh = () => {
    const refreshedTodos = [
      ...todos,
      {
        id: Math.random(),
        todo: "Todo created by another user",
        isCompleted: true,
      },
    ];
    setTodos(refreshedTodos);
  };

  const incompleteTodos = todos.filter((item) => !item.isCompleted);

  const completedTodos = todos.filter((item) => item.isCompleted);

  return (
    <div className="w-full px-4  sm:px-30">
      <div className="flex flex-col md:flex-row justify-between gap-4 py-10">
        <h1 className="text-3xl font-bold">Things to get done</h1>
        <Button onClick={handleRefresh}>Refresh</Button>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">Things To Do</h1>

        <ul>
          {incompleteTodos && incompleteTodos.length > 0 ? (
            incompleteTodos.map((item) => (
              <TodoList item={item} handleTodo={handleTodo} />
            ))
          ) : (
            <p className=" p-4 text-lg text-gray-500 font-medium italic">
              No pending tasks
            </p>
          )}
        </ul>

        <button
          className={`bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-white text-lg font-medium mt-10 ${
            !isAdding ? "block" : "hidden"
          }`}
          onClick={() => setIsAdding(!isAdding)}
        >
          Add a Todo
        </button>

        {isAdding && (
          <div className="bg-gray-200 mt-10 p-4 w-full rounded gap-4 flex flex-col">
            <h2 className="text-2xl font-medium">Create a Todo</h2>

            <input
              type="text"
              placeholder="Write an article to add your task"
              className="md:w-180 bg-white p-2  rounded overflow-hidden border border-gray-400 focus:outline-yellow-500 md:text-lg font-medium"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />

            <div className="flex gap-10">
              <Button
                disabled={newTodo.trim() === ""}
                onClick={() => handleAddTodo()}
              >
                Save
              </Button>

              <Button
                className="!bg-white !text-black hover:!bg-gray-300"
                onClick={() => setIsAdding(!isAdding)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4 mt-10">Completed Tasks</h1>

        <ul>
          {completedTodos && completedTodos.length > 0 ? (
            completedTodos.map((item) => (
              <TodoList item={item} handleTodo={handleTodo} />
            ))
          ) : (
            <p className=" p-4 text-lg text-gray-500 font-medium italic">
              No completed tasks
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
