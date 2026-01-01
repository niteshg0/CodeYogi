import { memo } from "react";

const TodoList = ({ item, handleTodo, handleRemove }) => {
  return (
    <li key={item.id} className="mt-2 text-lg font-medium flex  items-center justify-between w-100 odd:bg-gray-100 p-2 rounded">
      <div>
        <input
          type="checkbox"
          className="w-5 h-5 border-2 border-white rounded 
                text-yellow-500 focus:ring-brand-soft  focus:ring-4 accent-yellow-500 p-1"
          onClick={() => handleTodo(item.id)}
          checked={item.isCompleted}
        />

        <span className="pl-2">{item.todo}</span>
      </div>

      <span
        className="text-lg text-gray-500 cursor-pointer ml-40"
        onClick={() => handleRemove(item.id)}
      >
        X
      </span>
    </li>
  );
};

export default memo(TodoList);
