const express = require ('express') ;
const bodyParser = require('body-parser')
const PORT = 3001 ;
const db = require ('../db/index.js')


const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'))

app.get('/api/history',(req,res)=>{
    db.GetAll((err,result)=>{
        return err ? console.log(err) : res.json(result)
    })
})

app.get('/api/history/?title=title'),(req,res)=>{
    console.log("hello",req.query.title)
    db.GetByName(req.query.title,(err,result)=>{
        return err ? console.log(err) : res.json(result)
    })
}

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
