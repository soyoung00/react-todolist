import React, { useState } from 'react'
import todoStore from '../store/TodoStore';

function TodoInsert() {
  const {save} = todoStore();
  const [ip,setIp] = useState('');// value 쓰려면 무조건 useState 이용해야함
  function handleSubmit(e){
    e.preventDefault();

    if(!ip){
      alert('글을 작성하세요!');
      return;
    }

    const today = new Date();
    const date = new Intl.DateTimeFormat('ko-KR',{
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today).replaceAll(' ','');
    // }).format(today).replace(/[가-힣]/,'T').replaceAll(' ','');
    save({content:ip,date,isdone:false})
    .then(()=>{ // 비동기 처리 : 뜻은 끝난 시점에 처리하라
      
      setIp('');
      alert('저장완료');
    });
    // console.log(today.toISOString());
  }

  return (
    <div>
      <form onSubmit={e=>handleSubmit(e)}>
      <input type="text" value={ip} onChange={e=>setIp(e.target.value)}/>
      <button>추가</button>
      </form>
    </div>
  )
}

export default TodoInsert