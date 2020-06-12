const express = require("express");
const app = express();

app.get("/", function(request, response){
response.sendFile(__dirname + "/public/index.html");
});


app.use(express.static('public'))
app.listen(3000, function(){
  console.log("Server started on port 3000")
});



