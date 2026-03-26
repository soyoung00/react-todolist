import TodoInsert from './comp/TodoInsert';
import TodoList from './comp/TodoList';
import './App.css';
import TodoHead from './comp/TodoHead';
import todoStore from './store/TodoStore';
import { useEffect, useState } from 'react';
// import axios from 'axios'

function App() {
  const { get } = todoStore();
  useEffect(() => {
    get();
  }, []);

  const [filter, setFilter] = useState("all");


  // axios.get('http://localhost:4000/todo')
  // .then(res=>{
  //   console.log(res.data);
  // });

  

  return (
    <div className="App">
      <TodoHead setFilter={setFilter}/>
      <TodoList filter={filter} />
      <TodoInsert />
    </div>
  );
}

export default App;
