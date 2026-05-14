//api > news.js
const express = require('express')
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
   const d = await axios({
    url:'https://openapi.naver.com/v1/search/news.json?query=정치&display=20&start=1&sort=date',
    method:'get',
    headers:{
        "X-Naver-Client-Id":"sXQ4n8dHYgSKGGRwlhhB",
        "X-Naver-Client-Secret":"8u0R_rPdn8"
    }
   })
  res.send(d.data)
})

module.exports = router;



