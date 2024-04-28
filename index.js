const express = require('express');
const app = new express();
const database = require('./config/database.js');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const multer = require('multer');

const authMiddleware = require('./controllers/authMiddleware')
const redirectAuthMiddleware = require('./controllers/redirectAuthMiddleware')
const loginUserController = require('./controllers/loginUser.js')
const homeController = require('./controllers/home.js');
const aboutControllers = require('./controllers/about.js');
const contactControllers = require('./controllers/contact.js');
const StoreQuestionController = require('./controllers/StoreQuestion.js')
const loginController = require('./controllers/login.js')
const logoutController = require('./controllers/logout')
const newPostController = require('./controllers/newPost');
const getPostController = require('./controllers/getPost.js');
const StorePostControllers = require('./controllers/StorePost.js');
const validateMiddleware = require('./controllers/validationMiddleware.js')
const registerController = require('./controllers/register.js')
const storeUserController = require('./controllers/storeUser.js')
const updateUserController = require('./controllers/updateUser.js');
const createUserInfoController = require('./controllers/createUserInfo.js');

app.set('view engine', 'ejs');
// app.use(fileUpload());
app.use(express.static('public'));

//use body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw());

app.listen(4000, () => {
    console.log(`Server is running at http://${process.env.APP_HOST}:${process.env.APP_PORT}`);
})

//import module express-session
app.use(expressSession({
    secret: 'keyboard cat'
}))
///
global.loggedin = null;
app.use("*", (req, res, next) => {
    loggedin = req.session.userId;
    next();
})
// app.post('/users/login',redirectAuthMiddleware, loginUserController)
app.post('/users/login', loginUserController.login);
//home
app.get('/', homeController)
//about
app.get('/about',authMiddleware, aboutControllers)
//contact
app.get('/contact', authMiddleware, contactControllers)
// lay du lieu question
app.post('/contact/store',authMiddleware, StoreQuestionController);
//post
app.get('/post', homeController)
//login
app.get('/auth/login', redirectAuthMiddleware, loginController)
//logout
app.get('/auth/logout',logoutController)
//newpost   
app.get('/posts/new',authMiddleware, newPostController)
//hien thi bai post
app.get('/post/:id', authMiddleware, getPostController)
//lay du lieu tren web ve

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/upload/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })
 
  const fileFilter=(req, file, cb)=>{
   if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
    console.log('valid');
       cb(null,true);
   }else{
       cb(null, false);
   }
 
  }
 
var upload = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter
 });

 app.post('/posts/store', authMiddleware, upload.single('image'), StorePostControllers);

app.get('/updateUser', authMiddleware, (req, res) => {
    res.render('updateUser');
})
app.post('/users/updateUser', authMiddleware, upload.single('image'), updateUserController);

// custom middleware khac
app.use('/posts/new', validateMiddleware);
app.use('/contact', validateMiddleware);
//register
app.get('/auth/register', redirectAuthMiddleware, registerController);
//lay du lieu username_password user
app.post('/users/register',redirectAuthMiddleware, storeUserController)
app.use((req, res) => {
    res.render('notfound')
})
