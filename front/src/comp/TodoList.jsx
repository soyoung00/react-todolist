import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import todoStore from '../store/TodoStore'

function TodoList({filter}) {

  const {data} = todoStore();

  // if(data.length === 0 || !data.length){
  
  let filterData = data;

  if(filter == "todo"){
    filterData = data.filter(item => item.isdone == false);
  }else if(filter =="done"){
    filterData = data.filter(item => item.isdone == true);
  }

  if(!data.length){
    console.log('data :: ',data);
    return <div> 할일 없음 </div>
  }

  // console.log('res :',data);
  return (
    <ul>
      {
        // data.length && <>하이!</>
        filterData.map(function(item){
          return <TodoItem key={item._id} item={item}/>
        })
      }
        

    </ul>
  )
}

export default TodoList