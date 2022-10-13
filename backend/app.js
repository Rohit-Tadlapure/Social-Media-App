// import dotenv from 'dotenv';
// dotenv.config();
// const dotenv = require('dotenv')
const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//NEW REGISTRATION FUNCTION

const registerSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
};

const registerModel = mongoose.model("register", registerSchema);

mongoose.connect("mongodb://localhost:27017/SMA", {

    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => console.log("Connected to database.."))
  .catch((err) => console.log(err));


app.post("/register", async (req, res) => {
//   console.log(req.body);


  const { name, email, mobile, password } = req.body;

  const userData = new registerModel({
    
    name: name,
    email: email,
    mobile: mobile,
    password: password

  });


  const hashPassword = await bcrypt.hash(req.body.password, 10);

  userData.password = hashPassword;

  try {
        const result = await userData.save();

        console.log(result);

        if (result) {
        return res.json({ data: "User register successfully" });
        }
    } 
    catch (err) {
        return res.json({ data: "Name alredy exists" });
    }
});



//Login function

const sercretKey = "ddmmyyyyhhmmss" ;

app.post('/login' , async (req,res)=>{ 
 
    const {email,password} = req.body  

    const getUser = await registerModel.findOne({email : email}) 
    try{
        if(getUser !== null){

            const checkPassword = await bcrypt.compare(password , getUser.password); 
            
            if(checkPassword){

                const authToken = await jwt.sign({email : getUser.email}, sercretKey, {expiresIn: '4m'}) 

                console.log(email,authToken)

                return res.json({data : "You are successfully Logged in " , authToken : authToken})  
                
            }
            else{

                return res.json({data : 'Entered Password is incorrect'})

            }
        } 
        else{

            return res.json({data : "You are not registered user...Kindly register first !!"})

        }
    } catch (error ){
        console.log(error);
        return res.json(error);
        }


})



//verify token

const verifyToken = (req,res, next)=>{ 
  const head = req.headers['authorization'].split(' ')[1]
  console.log("testing",head);
  if(!head){
    console.log('kiol');
    return res.json("token is required")
  }
  else{
    try{
      const decode = jwt.verify(head, sercretKey);
      console.log(head,sercretKey);
      return next();
    }
    catch(e){
      console.log('here');
      console.log(e);
      return res.json("token invalid")
    }
  }

  console.log(head)
}


//create post function

const postSchema = {
  title: { type: String, required: true },
  content: { type: String, required: true }
  
};

const postModel = mongoose.model("post", postSchema);

mongoose.connect("mongodb://localhost:27017/SMA", {

    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => console.log(""))
  .catch((err) => console.log(err));


app.post('/createpost',verifyToken, async(req,res)=>{
  // console.log(req.body)

  const{title, content} = req.body 
  console.log(title,content)
  const postData = new postModel({
      title : title ,
      content : content
      
  }) 

  try{ 

    await postData.save() 

    res.send({data : "Post saved successfully !!"})

  } 
  catch(err){

      res.send({data : "error"})
  }
})




//Get post function
app.get('/getpost', async(req,res)=>{

  try{
    const getpost = await postModel.find({},{title:1,_id:0,content:1})

    return res.json({data: getpost})

  }
  catch(err){

    return res.json({data:"error"})

  }
})




//PORT
app.listen(3000, () => {
  console.log("listening on port 3000...");
});
