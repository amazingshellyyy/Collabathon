const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

const db = require('./models');

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//view routes
app.get("/",(request, response)=>{
 
  console.log('Hi this is the hoomepage');
  //JSON Response (should be wrap inside an object {})
  // response.json({message: "success"});
  // HTML Response
  // response.send('<h1>Welsome to Collabathon</h1>');
  //file response
  response.sendFile('/views/index.html', {
      root: __dirname
  });
} );

app.get("/dashboard", (request, response)=>{
  // response.json({TEMP_CITIES});
  response.sendFile('/views/dashboard.html', {
      root: __dirname,
  })
});

//json data only endpoint // get request to Cities Index
app.get("/api/v1/users", (request, response) => {
  //Step 1: Query the Database for Cities
  db.User.find({}, (err, allUsers) => {
      //if there is an error, return immediately with error
      if (err) return response.status(400).json(err);

      //Respond with the requested data
      response.json(allUsers);
  })
  
})
//POST user create

app.post("/api/v1/users", (request, response) => {
  const userData = request.body;
  
  db.User.create(userData, (err, newUser) => {
    if (err) return response.status(400).json(err);
    response.json(newUser);
  })
})


app.listen(PORT,()=> console.log(`server running at http://localhost:${PORT}`));