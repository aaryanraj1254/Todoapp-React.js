import './App.css';
import ToDoList from './ToDoList';

function App(){
  return(
    <div className='app'>
      <ToDoList />
    </div>
  );
}

export default App;














// App.jsx:

// Renders the overall structure of the app (e.g., header, footer, layout)
// Provides a container for the Todo list
// Todo.jsx:

// Renders the individual Todo items (e.g., text, checkbox, delete button)
// Handles user interactions (e.g., adding, editing, deleting Todo items)
// Manages the state of the Todo list (e.g., adding new items, updating existing ones)