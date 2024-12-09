const userModel=require("../models/userModel")

const jwt=require("jsonwebtoken")

const auth = async (req, res, next) => {
    try {
      const { token } = req.headers;
      
  
      if (!token) {
        return res.json({
          success: false,
          message: "Token not found in auth middleware",
          token
        });
      }
  
      const {id}  = jwt.verify(token, process.env.SECRET);
      console.log('Token verified successfully, user ID:', id);
  
      req.id = id;
      next();
    } catch (err) {
      console.error('Error during token verification:', err);
      return res.json({
        success: false,
        message: "Invalid token",
        error: err.message
      });
    }
  };
  
module.exports=auth