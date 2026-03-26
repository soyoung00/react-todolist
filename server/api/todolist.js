//todolist.js
const express = require('express')
const { getDB } = require('../db/db_todolist');
const { ObjectId } = require('mongodb');
const todolist = express.Router();


todolist.get('/', async (req, res) => {
  try {
    //실데이터가 들어 있는 콜랙션 조회
    const data2 = await getDB().collection('todos').find().toArray();
    // const data2 = await getDB().collection('todos').find({isdone:true}).toArray(); 서버로 필터 거는 법
    res.send(data2);// 프론트로 보내줌
    console.log('data :::::::::: ',data2);
    // res.send({success:true,data:data}); 위에꺼로 쓰나 밑에꺼로 쓰나 의미는 똑같음
  } catch (error) {
    res.send({success:false, msg:error.message});
  }
})

// 서버로 필터 거는 법
// todolist.get('/completed', async (req, res) => {
//   try {
//     //실데이터가 들어 있는 콜랙션 조회
//     const data2 = await getDB().collection('todos').find({isdone:true}).toArray(); 
//     res.send(data2);// 프론트로 보내줌
//     console.log('data :::::::::: ',data2);
//     // res.send({success:true,data:data}); 위에꺼로 쓰나 밑에꺼로 쓰나 의미는 똑같음
//   } catch (error) {
//     res.send({success:false, msg:error.message});
//   }
// })

todolist.post('/', async (req, res) => {

  try {
    //실데이터가 들어 있는 콜랙션 조회
    // const data = await getDB().collection('test').find().toArray();
    const result = await getDB().collection('todos').insertOne(req.body);
     console.log('result ::::::::: ',result);
    const data = { ...req.body, _id: result.insertedId };
    res.send({success:true,data});

  } catch (error) {
    res.send({success:false, msg:error.message});
  }
})

todolist.delete('/', async (req, res) => {
  const {id} = req.query;
  // console.log(id);
  
  try {
    
    const result = await getDB().collection('todos').deleteOne({_id:new ObjectId(id)});
    res.send({success:true});
    
    
  } catch (error) {
    res.send({success:false});
  }
})

todolist.put('/state', async (req, res) => {
  const {id} = req.query;
  const {isdone} = req.body;
  console.log(id,isdone);
  
  try {
    
    const result = await getDB().collection('todos').updateOne({_id:new ObjectId(id)},{$set:req.body});
    res.send({success:true});
    
    
  } catch (error) {
    res.send({success:false});
    
  }
})
todolist.put('/content', async (req, res) => {
  const {id} = req.query;
  const {content} = req.body;
  console.log(id,content);
  
  try {
    
    const result = await getDB().collection('todos').updateOne({_id:new ObjectId(id)},{$set:req.body});
    res.send({success:true});
    
    
  } catch (error) {
    res.send({success:false});
    
  }
})
module.exports = todolist;
