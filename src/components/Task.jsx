import { useState } from "react";
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

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  const handleUpdate = (id, isDone) => {
    toggleItemDone(id, !isDone);
  };

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (id) => {
    updateItemText(id, editedText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(item.text);
  };

  return (
    <div className="border-b border-white/10 py-3 flex justify-between text-gray-200 group">
      <div className="w-full flex items-center gap-3">
        <div
          className={`min-w-3 min-h-3 ${
            item.isDone ? "bg-success" : "bg-secondary"
          } rounded-lg`}
        ></div>
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="bg-transparent text-gray-200 w-full py-1 px-2 cursor-pointer border-white"
          />
        ) : (
          <p
            className={
              item.isDone
                ? "font-bold text-gray-600 line-through"
                : "font-bold group-hover:scale-105 duration-200 text-gray-200"
            }
          >
            {item.text}
          </p>
        )}
      </div>
      <div className="w-[100px] flex gap-3 justify-end text-white/50">
        {isEditing ? (
          <>
            <button
              className="hover:text-white"
              title="Update"
              onClick={() => handleSaveEdit(item.id)}
            >
              <Check />
            </button>
            <button
              className="hover:text-white"
              title="Cancel"
              onClick={handleCancelEdit}
            >
              <Cross />
            </button>
          </>
        ) : (
          <>
            <button
              className="hover:text-white "
              title="Edit"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="hover:text-white"
              title={item.isDone ? "Undo" : "Mark Completed"}
              onClick={() => handleUpdate(item.id, item.isDone)}
            >
              {item.isDone ? <Cross /> : <Check />}
            </button>
            <button
              className="hover:text-white"
              title="Delete Task"
              onClick={() => handleDeleteItem(item.id)}
            >
              <Cross />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
