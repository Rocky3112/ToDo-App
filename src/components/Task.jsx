import { useContext } from "react";
import { TodoContext } from "../provider/TodoProvider";
import Check from "../icons/Check";
import Cross from "../icons/Cross";


const Task = ({ item }) => {
  const {
    updateItemText,
    toggleItemDone,
    deleteItem
  } = useContext(TodoContext);

  const handleUpdate = (id, isDone) => {
    toggleItemDone(id, !isDone);
  };

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  const handleEdit = (id, newText) => {
    updateItemText(id, newText);
  };

  return (
    <div className="border-b border-white/10 py-3 flex justify-between text-gray-200 group">
      <div className="w-full flex items-center gap-3">
        <div
          className={`min-w-3 min-h-3 ${
            item.isDone ? "bg-success" : "bg-secondary"
          } rounded-lg`}
        ></div>
        <p
          className={
            item.isDone
              ? "font-bold text-gray-400 line-through"
              : "font-bold group-hover:scale-105 duration-200 text-gray-200"
          }
        >
          {item.text}
        </p>
      </div>
      <div className="w-[100px] flex gap-3 justify-end text-white/50">
        <button
          className="hover:text-white text-2xl"
          title="Edit"
          onClick={() => handleEdit(item.id,  item.text)}
        >
          Edit
        </button>
        <button
          className="hover:text-white"
          title="Mark done"
          onClick={() => handleUpdate(item.id, item.isDone)}
        >
          <Check />
        </button>
        <button
          className="hover:text-white"
          title="Delete"
          onClick={() => handleDeleteItem(item.id)}
        >
          <Cross />
        </button>
      </div>
    </div>
  );
};

export default Task;
