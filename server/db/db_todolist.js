//db_todolist
// const uri = "mongodb+srv://minkyu:test123456789@minkyu.rlol7cf.mongodb.net/?appName=minkyu";

const { MongoClient } = require('mongodb');
const uri = "mongodb://soyoung:sopark0225p1@ac-w4ot7ko-shard-00-00.tynnfgf.mongodb.net:27017,ac-w4ot7ko-shard-00-01.tynnfgf.mongodb.net:27017,ac-w4ot7ko-shard-00-02.tynnfgf.mongodb.net:27017/?ssl=true&replicaSet=atlas-alrts5-shard-0&authSource=admin&appName=Cluster0";
const client = new MongoClient(uri);

let db;
async function connectDB() {
    try {

        await client.connect(); //몽고접속
        db = client.db('todolist');  //프로젝트db 활성화
        console.log('접속완료');

    } catch (error) {
        console.log(error);
    }
}

function getDB() {
    return db;
}

module.exports = { connectDB, getDB }