// Datei .gitignore und .env erstellt
// alles was in .gitignore steht wird nicht von gi überwacht!
// guter "Einzeiler" um gitignore zu erstellen:
// touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status

// .env hier speichern wir zB unseren API key, fügen sie zu .gitignore hinzu und so ist der Key nur auf unserem Rechner!
const express = require('express')
const app = express()



// Um mit API arbeiten zu können benötigen wir node-fetch!
// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');


// API key von .env importieren
const config = require('./.env')
const newsApi = config.apikey

console.log(newsApi);

app.use(express.static('public'))
app.set('view engine', 'ejs')
let data
// fetch my Data!
fetch(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-04&sortBy=publishedAt&apiKey=${newsApi}`)
    .then(res => res.json())
    .then(json => console.log(json));

app.get("/", (req, res) => {
    res.render('home', { APIData: data })
})

app.listen(3022, () => console.log("Server running http://localhost:3022"))