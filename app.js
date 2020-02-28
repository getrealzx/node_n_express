const e = require('express');
const app = e();


// app.use(e.static('public'));
///////////HW 1
app.get('/',(req,res) => {
    res.send('Hello, World')
    
});


////////////////HW2

app.get('/cats',(req,res) => {
    res.send('Meow')
    
});

app.get('/dogs',(req,res) => {
    res.send('Woof')
    
});

app.get('/cats_and_dogs',(req,res) => {
    res.send('Living together')
});

////////////////////HW3

app.get('/greet/:name',(req,res) => {

    let name = req.param('name');

    res.send(`Hello, ${name}!`)
});


//////////////////HW4

app.get('/year',(req,res) => {

    let age = parseInt(req.param('age'));
    var d = new Date();
    var n = d.getFullYear()
    let year = n - age;
    res.send(`You were born in ${year}.`)
});



app.listen(3000);