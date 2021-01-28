const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const threadInfo = [];
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});

app.post("/register", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    const threadLength = threadInfo.length
    if (threadLength === 0)
        response.send(`<body> ${request.body.userName} - ${request.body.userPassword}<br>
                                Comment to post - ${request.body.comment}</body>`);
    else
        response.send(`<body> ${request.body.userName} - ${request.body.userPassword}<br>
                                Comment to post - ${request.body.comment}<br>
                                Previous comment to post - ${threadInfo[threadLength - 1].comment}</body>`);
    threadInfo.push({
        userName: request.body.userName,
        userPassword: request.body.userPassword,
        comment: request.body.comment
    })

});

app.get("/", function(request, response){
    response.set({ 'Set-Cookie': 'login=yes'});
    response.send("Главная страница");
});

app.listen(3000);