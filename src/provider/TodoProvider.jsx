import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  // Add new task
  const addItemToList = (text) => {
    const todoItem = {
      id: Date.now(),
      text,
      isDone: false,
    };
    setItems((prevItems) => [...prevItems, todoItem]);
    setInputValue("");
  };

  // Update task
  const updateItemText = (id, newText) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, text: newText };
      }
      return item;
    });
    setItems(updatedItems);
  };

  // Mark task as complete or not
  const toggleItemDone = (id, isDone) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isDone };
      }
      return item;
    });
    setItems(updatedItems);
  };

  // Delete task
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // Delete completed task
  const deleteCompletedItems = () => {
    const updatedItems = items.filter((item) => !item.isDone);
    setItems(updatedItems);
  };

  // Clear all task
  const clearItems = () => {
    setItems([]);
    localStorage.removeItem("Items");
  };

  // Update localStorage
  useEffect(() => {
    if (typeof localStorage && items) {
      if (items.length > 0) {
        localStorage.setItem("Items", JSON.stringify(items));
      }
    }
  }, [items]);

  // Set task on first load
  useEffect(() => {
    if (typeof localStorage) {
      const storedItems = JSON.parse(localStorage.getItem("Items"));
      if (storedItems) {
        setItems(storedItems);
      }
    }
  }, []);

  return (
    <TodoContext.Provider
      value={{
        inputValue,
        setInputValue,
        items,
        addItemToList,
        updateItemText,
        toggleItemDone,
        deleteItem,
        deleteCompletedItems,
        clearItems,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

