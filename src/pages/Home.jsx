import React, { useContext } from "react";
import Plus from "../icons/Plus";
import Task from "../components/Task";
import { TodoContext } from "../provider/TodoProvider";

const Home = () => {
  const {
    inputValue,
    setInputValue,
    items,
    addItemToList,
    deleteCompletedItems,
    clearItems,
  } = useContext(TodoContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addItemToList(inputValue.trim());
    }
  };

  return (
    <div className="w-full h-[300px] bg-gradient-to-b from-transparent bg-[#6841da] px-5">
      <div className="h-[80px]"></div>
      <h1 className="w-fit text-white mx-auto lg:text-5xl text-3xl font-bold mb-4 drop-shadow-md">
        TO-DO Application
      </h1>
      <div className="max-w-[600px] bg-black-100 shadow-xl p-5 rounded-lg mx-auto bg">
        <form onSubmit={handleSubmit}>
          <div className="flex rounded-[5px] overflow-hidden border border-black/30" title="Add item">
            <input
              type="text"
              value={inputValue}
              className="bg-black-200 text-gray-200 w-full py-2 px-4 outline-none"
              placeholder="Type here.."
              onChange={handleInputChange}
            />
            <button className="py-2 px-4 flex text-sm items-center gap-2 bg-primary hover:bg-primary/70 duration-150 text-white/80">
              <Plus />
            </button>
          </div>
        </form>
        <div className="border-t my-5 border-white/10 min-h-[300px]">
          {items?.length > 0 &&
            items.map((item) => (
              <React.Fragment key={item.id}>
                <Task item={item} />
              </React.Fragment>
            ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={deleteCompletedItems}
            className="mt-3 text-gray-300 bg-black-200 text-xs px-3 py-1 rounded-sm hover:bg-black/30"
          >
            Clear completed
          </button>
          <button
            onClick={clearItems}
            className="mt-3 text-gray-300 bg-black-200 text-xs px-3 py-1 rounded-sm hover:bg-black/30"
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
