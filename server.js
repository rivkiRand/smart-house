const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const db = require('mongoose');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

db.connect('mongodb://127.0.0.1:27017/smartHouseRooms',()=>{
    console.log('db on');
})

app.use(express.static('smart/build'))

const roomsSchema = db.Schema({
    name:String,
    color:String,
    type:String,
    products:Array
});

const roomsList = db.model('rooms',roomsSchema);

app.get('/getData',(req,res)=>{

    const get = async()=>{
        let myRooms = await roomsList.find()
        res.json(myRooms);
    }
    get()
})

app.post('/addRoom',(req,res)=>{
 
    let temp = req.body.room
    const addNewRoom = async(t)=>{
        await roomsList.insertMany(t)
        res.json({msg:'ok'});
    }
    addNewRoom(temp)
})

app.post('/addProductInRoom',(req,res)=>{
    let room = req.body.myRoom;
    let product = req.body.myProduct;

    const addNewProduct = async(r,p)=>{
        let result = await roomsList.findOne({r})
        if(result != null){
          r.products.push(p);
         await roomsList.updateOne({name:r.name} ,{$set:{products:r.products}})
         res.json({r:r})
        }
       else{
        res.json({msg:'this room is not conect'})
       }
    }
    addNewProduct(room,product)
})

app.put('/deleteProduct',(req,res)=>{
    let room = req.body.myRoom
    let productIndex = req.body.index

    const deleteP = async(r,p)=>{
        let result = await roomsList.findOne({r})
        if(result != null){
          r.products.splice(p,1);
          await roomsList.updateOne({name:r.name} ,{$set:{products:r.products}})
          res.json({msg:'ok'})
        }else{
        res.json({msg:'this room is not conect'})
        }
    }
    deleteP(room,productIndex);

})

app.listen(4000,()=>{
    console.log('server works on port 4000');
})
