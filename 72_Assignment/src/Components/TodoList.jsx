import { memo } from "react";

const TodoList = ({item, handleTodo }) => {
  return (
    <li key={item.id} className="mt-2 text-lg font-medium flex  items-center ">
      <input
        type="checkbox"
        className="w-5 h-5 border-2 border-white rounded 
                text-yellow-500 focus:ring-brand-soft  focus:ring-4 accent-yellow-500 p-1"
        onClick={() => handleTodo(item.id)}
        checked={item.isCompleted}
      />

      <span className="pl-2">{item.todo}</span>
    </li>
  );
};


export default memo(TodoList);
