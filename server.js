const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

const db = require('./models');

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/",(request, response)=>{
  console.log(request);
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

//POST user create

app.get("/", (request, response) => {
  response.json({message: 'hii'});
})

app.post("/api/v1/users", (request, response) => {
  const userData = request.body;
  db.City.create(userData, (err, newUser) => {
    if (err) return response.status(400).json(err);
    response.json(newUser);
  })
})


app.listen(PORT,()=> console.log(`server running at http://localhost:${PORT}`));