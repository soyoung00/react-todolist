import React, { useState } from 'react'
import todoStore from '../store/TodoStore'

function TodoItem({ item }) {
  const { deleteItem,completeTodo } = todoStore();
  // const [editId, setEditId] = useState();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const {updateItem} = todoStore();

  return (
    <li style={{color:item.isdone && 'red'}}>
      
      {
        editId == item._id ?
        <form onSubmit={(e)=> {e.preventDefault(); updateItem(item._id,editText);setEditId(null)}}>
            <input type="text" defaultValue={item.content} onChange={(e)=>setEditText(e.target.value)} />
        <button>저장</button>
        </form>
        :
        item.content

      }



      {editId == item._id ?
      
      <button disabled>수정</button>
      
      :
      <button onClick={()=>{setEditId(item._id); setEditText(item.content)}}>수정</button>

      }

      

      <button onClick={() => deleteItem(item._id)}>삭제</button>
      <button onClick={() => completeTodo(item._id)}>완료</button>
    </li>
  )
}

export default TodoItem