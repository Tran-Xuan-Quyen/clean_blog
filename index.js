const express = require('express');
const app = new express();
const ejs = require('ejs');
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
app.use(fileUpload());

//tạo liên kết nodejs với mongoDB với Url bên dưới
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my_database')

// Đăng kí thư mục public
app.use(express.static('public'));

//Authentication middleware
const authMiddleware = require('./controllers/authMiddleware')
//redirectAuthMiddleware
const redirectAuthMiddleware = require('./controllers/redirectAuthMiddleware')
//use body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw());

//Tạo server
app.listen(4000, () => {
    console.log('hello');
})

//import module express-session
const expressSession = require('express-session');
app.use(expressSession({
    secret: 'keyboard cat'
}))
///
global.loggedin = null;
app.use("*", (req, res, next) => {
    loggedin = req.session.userId;
    next();
})
//home
const homeController = require('./controllers/home.js');
app.get('/', homeController)
//about
const aboutControllers = require('./controllers/about.js');
app.get('/about', aboutControllers)
//contact
const contactControllers = require('./controllers/contact.js');
app.get('/contact', contactControllers)
//post
app.get('/post', homeController)

//login
const loginController = require('./controllers/login.js')
app.get('/auth/login', redirectAuthMiddleware, loginController)
//logout
const logoutController = require('./controllers/logout')
app.get('/auth/logout',logoutController)
//newpost
const newPostController = require('./controllers/newPost');
app.get('/posts/new',authMiddleware, newPostController)

//hien thi bai post
const getPostController = require('./controllers/getPost.js');
app.get('/post/:id',  getPostController)

//lay du lieu tren web ve
const StorePostControllers = require('./controllers/StorePost.js');
app.post('/posts/store', authMiddleware,StorePostControllers)

// custom middleware khac
const validateMiddleware = require('./controllers/validationMiddleware.js')
app.use('/posts/new',validateMiddleware);

//register
const registerController = require('./controllers/register.js')
app.get('/auth/register', redirectAuthMiddleware, registerController);

//lay du lieu username_password user
const storeUserController = require('./controllers/storeUser.js')
app.post('/users/register',redirectAuthMiddleware, storeUserController)

//check login
const loginUserController = require('./controllers/loginUser.js')
app.post('/users/login',redirectAuthMiddleware, loginUserController)

app.use((req, res) => {
    res.render('notfound')
})