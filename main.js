const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const list =
[
    {todo: 'Get groceries',
     yetTodo: true
   },
   {todo: "Go to the gym",
     yetTodo: false,
   },
    {todo: "Go to the gym",
    yetTodo: false},
    {todo: 'Learn Mustache',
    yetTodo: true}
  ];
const data = {
  list: list
};

app.use(bodyParser.urlencoded({extended: true}));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', function (req, res) {
  res.render('milk', data);
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
//
app.post("/",function(req,res){
  list.push({todo:req.body.text, yetTodo:true});
  res.render('milk',data);
});

  app.post('/complete',function(req,res){
    console.log(req.body);
    let completed = req.body.complete;
    function findTodo(item){
      return item.todo === completed;}
      console.log(list.find(findTodo));
      list.find(findTodo).yetTodo = false;
      res.redirect('/');
  });

app.listen(3000,function(){
  console.log("This is running correctly!");
});
