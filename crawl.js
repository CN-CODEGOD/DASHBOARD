
const express = require('express');
const app = express();
const PORT = 3001;
const cheerio = require('cheerio'); 

app.get('/p',(req,res) => {
(async ()=>{
    try {
        const response = await got('http://news.baidu.com');
        let $=cheerio.load(response.body)
        let result =$('#pane-news li a')
        let news= []
        result.each((index,ClipboardItem)=>{    
          
        })
        res.send(news)
       }
       catch (error){
        console.log(error);
       }

})();
})
app.listen(3001,() => {
    console.log('http://localhost:3001')
})