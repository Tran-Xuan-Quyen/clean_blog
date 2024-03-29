const express = require("express");
const app = new express();
const database = require("./config/database.js");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const connection = require("./config/mysql.js");
const path = require("path");
const fs = require("fs");

// const authMiddleware = require("./controllers/authMiddleware");
// const redirectAuthMiddleware = require("./controllers/redirectAuthMiddleware");
// const loginUserController = require("./controllers/loginUser.js");
// const homeController = require("./controllers/home.js");
// const aboutControllers = require("./controllers/about.js");
// const contactControllers = require("./controllers/contact.js");
// const StoreQuestionController = require("./controllers/StoreQuestion.js");
// const loginController = require("./controllers/login.js");
// const logoutController = require("./controllers/logout");
// const newPostController = require("./controllers/newPost");
// const getPostController = require("./controllers/getPost.js");
// const StorePostControllers = require("./controllers/StorePost.js");
// const validateMiddleware = require("./controllers/validationMiddleware.js");
// const registerController = require("./controllers/register.js");
// const storeUserController = require("./controllers/storeUser.js");

const createDatabase = require("./controllers/createDatabase.js");
const migration = require("./controllers/migration.js");
connection.connect(async (err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL server");

  // Create database
  let check = await createDatabase.create("test12345");
  await migration.executeMigrations();
  console.log(check);
});
// function executeMigrations() {
//   const migrationDir = './migrations';

//   fs.readdir(migrationDir, (err, files) => {
//     if (err) {
//       console.error('Error reading migration directory:', err);
//       //connection.end(); // Close connection
//       return;
//     }

//     //Sort migration files by name
//     files.sort();

//     //Execute each migration script
//     files.forEach((file) => {
//       const migrationScript = fs.readFileSync(path.join(migrationDir, file), 'utf8');
//       connection.query(migrationScript, (err) => {
//         if (err) {
//           console.error('Error executing migration script:', err);
//           connection.end(); // Close connection
//           return;
//         }
//         console.log(`Migration script '${file}' executed successfully`);
//       });
//     });

//     // Close connection
//    // connection.end();
//   });
// }

app.set("view engine", "ejs");
app.use(fileUpload());
app.use(express.static("public"));
//app.use(express.static(__dirname, 'public'));
//use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.raw());

app.listen(4000, () => {
  console.log(
    `Server is running at http://${process.env.APP_HOST}:${process.env.APP_PORT}`
  );
});

// //import module express-session
// app.use(expressSession({
//     secret: 'keyboard cat'
// }))
// ///
// global.loggedin = null;
// app.use("*", (req, res, next) => {
//     loggedin = req.session.userId;
//     next();
// })

// //check login

// // app.post('/users/login',redirectAuthMiddleware, loginUserController)
// app.post('/users/login', loginUserController.login);
// //home
// app.get('/', homeController)
// //about
// app.get('/about',authMiddleware, aboutControllers)
// //contact
// app.get('/contact', authMiddleware, contactControllers)
// // lay du lieu question
// app.post('/contact/store',authMiddleware, StoreQuestionController);
// //post
// app.get('/post', homeController)
// //login
// app.get('/auth/login', redirectAuthMiddleware, loginController)
// //logout
// app.get('/auth/logout',logoutController)
// //newpost
// app.get('/posts/new',authMiddleware, newPostController)
// //hien thi bai post
// app.get('/post/:id', getPostController)
// //lay du lieu tren web ve
// app.post('/posts/store', authMiddleware,StorePostControllers)
// // custom middleware khac
// app.use('/posts/new', validateMiddleware);
// app.use('/contact', validateMiddleware);
// //register
// app.get('/auth/register', redirectAuthMiddleware, registerController);
// //lay du lieu username_password user
// app.post('/users/register',redirectAuthMiddleware, storeUserController)
// app.use((req, res) => {
//     res.render('notfound')
// })
