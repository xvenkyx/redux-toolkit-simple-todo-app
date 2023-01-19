import logo from './logo.svg';
import './App.css';
import AddTodo from './components/addToDo';
import ListTodo from './components/listToDo';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
