const express = require("express");
const app = express();
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./databases/tafelVoetbal.db', (err) => {
  if (err) {
    console.log(err.message);
    console.error(err.message);
  }else {
    console.log('Connected to the database tafelVoetbal');
  }
})

app.get("/", function(request, response){
response.sendFile(__dirname + "/public/index.html");
});


app.use(express.static('public'))
app.listen(3000, function(){
  console.log("Server started on port 3000")
});



