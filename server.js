const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient
const PORT = 8000;

app.use(cors());

// let db, dbConnectionStr = '', dbName = 'Recipes'

let Recipes = {
    'French Fries': {
        'Ingredients': 'Potato, salt',
        'Cooking Method': 'Air fry',
        'How long': '13 minutes'
    },
    'Mapo Tofu': {
        'Ingredients': 'Tofu, ground beef, sugar, chili pepper, doubanjiang',
        'Cooking Method': 'Stir fry',
        'How long': '20 minutes'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
    response.send('<h1>Food Recipes</h1>')
})

app.get('/recipes/:food', (request, response) => {
    let food = request.params.food
    console.log(food)
    if (Recipes[food]) { 
        response.json(Recipes[food].Ingredients)
    } else { 
        response.status(404).end();
    }
})

app.listen(PORT, ()=> {
    console.log('Server is running.');
})