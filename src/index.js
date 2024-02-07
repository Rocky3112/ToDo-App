import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoProvider } from './provider/TodoProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrap with context provider */}
    <TodoProvider>

    <App />
    </TodoProvider>
    
  </React.StrictMode>
);

