var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')


var admin = require('firebase-admin')

var serviceAccount = require('./app-idea-1-firebase-adminsdk-h77r3-961a4911c7.json')

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://app-idea-1.firebaseio.com'
})

var app = express()


//set up ejs

app.set('view engine', 'ejs')

app.use(express.static('views'))
app.set('views', __dirname + '/views')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(logger('dev'))

function isAuthenticated(request, response, next){
    //once user sends token, we're going to attach the user to every request
    //check if user is logged in
    //if they are, attach them to request object and call next, which takes the user to app.get ('/homecoming-queen')
    //if they are not, send them to the login page
    //with a message saying: 'login;'
    
}

app.get('/', function(request, response) {
    response.render('home.ejs')
})

app.get('/signup', function(request, response){
    response.render('signup.ejs')
})

app.get('/login', function(request,response){
    response.render('login.ejs')
})

app.get('/home1', function(request,response){
    response.render('home1.ejs')
})

app.get('/profile', function(request,response){
    response.render('profile.ejs')
})





app.post('/', function(request,response){

})

var port = process.env.PORT || 8080

app.listen(port, function() {
    console.log(`App running on ${port}.`)
})