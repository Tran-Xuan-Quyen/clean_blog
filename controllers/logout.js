const jwt = require('jsonwebtoken');
const authen2 = require('../models/Authen2');


module.exports = async (req, res) => {
  const accessToken = req.headers.accessToken;
  if(!accessToken) {
   res.status(403).json({
      success: false,
      message: "access token undefined"
   })
  }
  else await jwt.verify(accessToken, process.env.JWT_PUBLIC_KEY)
  .then((decoded) => {
   if(!decoded) {
      res.status(403).json({
         success: false,
         message: "verify token error"
      })
   }
   else {
         let del = authen2.dropDatabyAccessToken(accessToken);
         if(del){
            console.log("logout success");
            res.redirect('/', loggedin = null);
         } 
         else 
         {
            res.status(403).json({
               success: false,
               message: "logout error"
            })
         }
   }
  })
  .catch(err => {res.status(403).json({err: err})})
}