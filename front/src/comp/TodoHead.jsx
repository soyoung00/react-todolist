import React from 'react'
import todoStore from '../store/TodoStore'

function TodoHead({setFilter}) {

const { data } = todoStore();
  const todoData = data.filter((item) => item.isdone == false);
  const doneData = data.filter((item) => item.isdone == true);

  
  
  return (
    <div>
        <h2>TODOLIST</h2>
        <div>
            <div>할일({todoData.length}) / 완료({doneData.length})</div>
            <div>
                <button onClick={()=>setFilter("all")}>전체</button>
                <button onClick={()=>setFilter("todo")}>진행중</button>
                <button onClick={()=>setFilter("done")}>완료</button>
            </div>
        </div>
    </div>
  )
}

export default TodoHead