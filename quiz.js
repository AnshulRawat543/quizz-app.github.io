

const myquiz = [
    {
        question: "Q1:Who is credited as the developer of Express.js? ",
        a: "Larry wall",
        b: "Rich Hickey",
        c: "TJ Holowaychuk",
        d: "Rob Pike",
        ans: "ans3",
    },
    {
        question: "Q2: Which of the following are the core features of the Express framework?",
        a: "It allows us to set up middleware to respond to HTTP Requests ",
        b: "It defines a routing table that can work as per HTTP Method and URL ",
        c: "It is used to render the HTML pages dynamically ",
        d: " All of the above",
        ans: "ans4",
    },
    {
        question: "Q3:In which of the following year was Express.js initially released? ",
        a: "November 2010 ",
        b: " November 2011",
        c: "December 2010 ",
        d: " December 2011",
        ans: "ans1",
    },
    {
        question: "Q4:What is the way to store local variables that can be accessed within the application? ",
        a: " Using Config file",
        b: "Using database ",
        c: "Using app.locals ",
        d: " Using app.storage",
        ans: "ans3",
    },
    {
        question: "Q5:In combination with a request method, root paths define the endpoints at which requests can be made. Which of the following are valid forms of route path? ",
        a: "strings ",
        b: " string patterns",
        c: "regular expressions ",
        d: "All of the above ",
        ans: "ans4",
    },
    {
        question: "Q6: Where are the captured values populated regarding the route parameters?",
        a: "req.data ",
        b: "app.locals",
        c: " req.params",
        d: "All of the above",
        ans: "ans3",
    },
    {
        question: "Q7: How is it possible to create chainable route handlers for a route path in Express.js?",
        a: "Using app.route() ",
        b: " Using app.routes()",
        c: "Using app.router() ",
        d: "Using app.routing()",
        ans: "ans1",
    },
    {
        question: "Q8: Which of the following function arguments are available to Express.js Route handlers?",
        a: "req - the request object ",
        b: " res - the response object",
        c: "next ",
        d: " All of the above",
        ans: "ans4",
    },
    {
        question: "Q9: Which of the following is the Scaffolding in Express.js?",
        a: "Yeoman ",
        b: " Express application generato",
        c: "Handler functions ",
        d: "Both A & B ",
        ans: "ans4",
    },
    {
        question: "Q10: In Express.js, the method app.all(path, callback [, callback ...]) can accept all HTTP methods:",
        a: " True",
        b: "False ",
        c: " Insufficient data",
        d: "None of the above",
        ans: "ans1",
    },
    {
        question: "Q11:Which of the following is a middleware in Express.js? ",
        a: "function(req){ } ",
        b: " method(req){ }",
        c: "function(req,res,next){ } ",
        d: "method(req,res,next){ } ",
        ans: "ans3",
    },
    {
        question: "Q12: Which of the following is the correct statement in the context of Express.js?",
        a: "Express is a minimal and flexible Node.js web application framework ",
        b: "Express is a minimal and flexible React.js web application framework ",
        c: "Express is a minimal and flexible Redux.js web application framework ",
        d: " Express is a minimal and flexible Angular.js web application framework",
        ans: "ans1",
    },
    {
        question: "Q13:Which of the following is the correct syntax to use Express.js in Node? ",
        a: "var = require('express')(); ",
        b: " var_require('express')();",
        c: " var app = require('express')();",
        d: "None of the above ",
        ans: "ans3",
    },
    {
        question: "Q14:What is the meaning of templating in Express.js? ",
        a: " Pug",
        b: "EJS ",
        c: " Mustache",
        d: "All of the above ",
        ans: "ans4",
    },
    {
        question: "Q15:To use Mongo with Express.js, we need a client API for node ",
        a: "TRUE ",
        b: "FALSE ",
        c: "Can be true or false ",
        d: "Cannot say ",
        ans: "ans1",
    },
    {
        question: "Q16: Which of the following facilitates us to create a skeleton for a web application easily?",
        a: "Authentication ",
        b: " APIs",
        c: " Debugging",
        d: "Scaffolding ",
        ans: "ans4",
    },
    {
        question: "Q17: Which of the following is a middleware that parses cookies attached to the client request object?",
        a: " cookie",
        b: "cookies ",
        c: " cookie-parser",
        d: "None of the above",
        ans: "ans3",
    },
    {
        question: "Q18: The method of using values is called?",
        a: "filters ",
        b: " interpolation",
        c: "inheritance ",
        d: "includes ",
        ans: "ans2",
    },
    {
        question: "Q19: Which of the following command is used to check the current version of NPM? ",
        a: "nmp --ver ",
        b: " npm --version",
        c: "npm help ",
        d: "None of the above ",
        ans: "ans2",
    },
    {
        question: "Q20: In Express.js, the method app.all(path, callback [, callback ...]) is",
        a: "True",
        b: "False ",
        c: "Cannot say ",
        d: "None of the above ",
        ans: "ans1",
    },
    {
        question: "Q21:Which of the following method requests that the server accept the data enclosed in the request to modify an existing object identified by the URI? ",
        a: "GET ",
        b: "DELETE ",
        c: " PUT",
        d: "POST ",
        ans: "ans3",
    },
    {
        question: "Q22:Which of the following statement is correct in the case of backlog arguments? ",
        a: " A port number on which the server should accept incoming requests",
        b: "The backlog argument is the name of the domain ",
        c: " The maximum number of queued pending connections",
        d: " An asynchronous function is called when the server starts listening for requests",
        ans: "ans3",
    },
    {
        question: "Q23:Which of the following was the earlier name of the Pug? ",
        a: "Terse ",
        b: " DRY",
        c: "Express ",
        d: "Jade ",
        ans: "ans4",
    },
    {
        question: "Q24:  Which of the following function is used to specify what to do when a get request at the given route is called?",
        a: " app.get(route, callback)",
        b: "get(route, callback) ",
        c: "js.get(route, callback) ",
        d: "fun.get(route, callback) ",
        ans: "ans1",
    },
    {
        question: "Q25: Where are the captured values populated regarding route parameters?",
        a: "app.locals object ",
        b: "app.locals object ",
        c: "req.params object",
        d: "None of the above ",
        ans: "ans3",
    },
    {
        question: "Q26: Cookies are the complex, large files/data sent to the server with a client request and stored on the server-side. ",
        a: "This statement is true ",
        b: " This statement is false",
        c: "Can be true or false ",
        d: " Cannot say",
        ans: "ans2",
    },
    {
        question: "Q27:HTTP is stateless ",
        a: " This statement is true",
        b: "This statement is false ",
        c: "It can be true or false ",
        d: "Cannot say",
        ans: "ans1",
    },
    {
        question: "Q28: What are the steps to structure My application? ",
        a: " Route listings ",
        b: " Route map",
        c: "MVC style controllers ",
        d: " All of the above",
        ans: "ans4",
    },
    {
        question: "Q29:What are the steps used for Error Handling in Express.js? ",
        a: "Create a Middleware ",
        b: "Install Error Handler Middleware ",
        c: "Both of these ",
        d: "None ",
        ans: "ans3",
    },
    {
        question: "Q30:Who are the developers of Express JS? ",
        a: "TJ Holowaychuk ",
        b: "StrongLoop",
        c: "Both A and B ",
        d: "None ",
        ans: "ans3",
    },
    {
        question: "Q31:What are the main features of Express JS? ",
        a: " The performance of Express JS is adequate due to the presence of a thin layer prepared by the Express JS",
        b: "It is used for organizing the web applications into the MVC architecture ",
        c: "Everything from routes to rendering view and performing HTTP requests can be managed by Express JS ",
        d: "All of the above ",
        ans: "ans4",
    },
    {
        question: "Q32: What function are arguments available to Express JS? ",
        a: "Req ",
        b: "Res ",
        c: "Next ",
        d: "All the above mentioned ",
        ans: "ans4",
    },
    {
        question: "Q33: How to config properties with requiring in Express JS? ",
        a: "A file with the name “config.json” is to be created in the config folder inside the project folder ",
        b: "The config properties are to be added in the config.json file ",
        c: "Now, require should be used to access the config.json file ",
        d: " All of the above ",
        ans: "ans4",
    },
    {
        question: "Q34:In which year the Express JS was introduced? ",
        a: "2009 ",
        b: "2010 ",
        c: "2011 ",
        d: "2014",
        ans: "ans2",
    },
    {
        question: "Q35:What are the core features of the Express framework? ",
        a: " Allows to set up middlewares to respond to HTTP Requests ",
        b: "Defines a routing table which can work as per HTTP Method and URL ",
        c: "Dynamically render HTML Pages ",
        d: "All of the above ",
        ans: "ans4",
    },
    {
        question: "Q36:Express JS is written only in ",
        a: "JavaScript ",
        b: "C programming ",
        c: "C++ ",
        d: "None ",
        ans: "ans1",
    },
    {
        question: "Q37:Express JS is in the platform of ",
        a: "Node JS ",
        b: "Web Analytics ",
        c: "Embed JS ",
        d: "None of these ",
        ans: "ans1",
    },
    {
        question: "Q38:How to store local variables that can be access within the application? ",
        a: "Config file ",
        b: "Using database ",
        c: "Using app.locals ",
        d: "Using app.storage ",
        ans: "ans3",
    },
    {
        question: "Q39: Where is captured values are populated regarding route parameters are ",
        a: "req.data ",
        b: "app.locals ",
        c: " req.params",
        d: "Both A & B ",
        ans: "ans3",
    },
    {
        question: "Q40:How can we create chainable route handlers for a route path in ExpressJs ? ",
        a: "Using app.route() ",
        b: "Using app.routes() ",
        c: "Using app.router() ",
        d: "Using app.routing() ",
        ans: "ans1",
    },
    {
        question: "Q41:What is Scaffolding in Express.js? ",
        a: "Yeoman ",
        b: "Express application generator ",
        c: "Handler functions ",
        d: "Both A & B ",
        ans: "ans4",
    },
    {
        question: "Q42:What is middleware in ExpressJs ? ",
        a: " function(req){ } ",
        b: "method(req){ } ",
        c: "function(req,res,next){ } ",
        d: "method(req,res,next){ } ",
        ans: "ans3",
    },
    {
        question: "Q43: Define templating in ExpressJs ? ",
        a: "Pug ",
        b: "EJS ",
        c: "Mustache ",
        d: " All of the above",
        ans: "ans4",
    },
    {
        question: "Q44:How to use express js in node? ",
        a: "var = require('express')(); ",
        b: "var_require('express')(); ",
        c: "var app = require('express')(); ",
        d: " None of them ",
        ans: "ans3",
    },
    {
        question: "Q45:Express is a minimal and flexible _______ web application framework. ",
        a: "Node.js ",
        b: " React.js ",
        c: "Redux.js ",
        d: " Angular.js ",
        ans: "ans1",
    },
    {
        question: "Q46:Express.js, or simply Express, is a _________ web application framework for Node.js ",
        a: "Front-end ",
        b: "Back-end ",
        c: "Database ",
        d: "None of the above ",
        ans: "ans2",
    },
    {
        question: "Q47:Pug earlier known as ? ",
        a: "Terse ",
        b: "DRY ",
        c: "Express ",
        d: "Jade ",
        ans: "ans4",
    },
    {
        question: "Q48:Which method requests that the server accept the data enclosed in the request as a modification to existing object identified by the URI? ",
        a: "GET ",
        b: "DELETE ",
        c: " PUT",
        d: "POST ",
        ans: "ans3",
    },
    {
        question: "Q49:This method of using values is called ? ",
        a: "filters ",
        b: "interpolation ",
        c: "inheritance ",
        d: "includes ",
        ans: "ans2",
    },
    {
        question: "Q50: _________ is a middleware which parses cookies attached to the client request object. ",
        a: "cookie ",
        b: "req.cookies ",
        c: "cookie-parser ",
        d: "None of the above ",
        ans: "ans3",
    },

]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const previous = document.querySelector('#previous');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let score = 0;


let questionCount = 0;
const loadQuestion = () => {
    // question.innerText= myquiz [0].question ;
    const questionList = myquiz[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();


const getAnswerCheck = () => {
    let answer2;
    answers.forEach((currElement) => {
        if (currElement.checked) {
            answer2 = currElement.id;
        }

    });
    return answer2;
}

const disSelectAll = () => {
    answers.forEach((currElement) => currElement.checked = false)
}


submit.addEventListener('click', () => {
    const checkedAnswer = getAnswerCheck();
    console.log(checkedAnswer)
    if (checkedAnswer === myquiz[questionCount].ans) {
        score++;
    }
    questionCount++;
    disSelectAll();
    q_left.innerText = `${questionCount}/50`
    if (questionCount < myquiz.length) {
        loadQuestion();
    } else {
        question.style.display = "none"
        option1.style.display = "none"
        option2.style.display = "none"
        option3.style.display = "none"
        option4.style.display = "none"
        submit.style.display = "none"
        answers.forEach((ele) => {
            ele.style.display = "none"
        })

        showScore.innerHTML = `
            <div class="last" >
            <div class="msg container" style="font-weight:bold;font-size:5vh;" >COMPLETED!!</div>
            
        <button class="enter" onclick="location.reload()" > Play Again </button>
        <div class="add ">
        <a href="form/form.html"><button class="enter">Get Your Score</button></a>
        </div>
        </div>
       
        `;
        showScore.classList.remove('scoreArea');
    }


});













var timeInSecs;
var ticker;

function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000);
}

function tick() {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--;
    }
    else {
        clearInterval(ticker);
        startTimer(50 * 60); // 4 minutes in seconds
    }

    var days = Math.floor(secs / 86400);
    secs %= 86400;
    var hours = Math.floor(secs / 3600);
    secs %= 3600;
    var mins = Math.floor(secs / 60);
    secs %= 60;
    var pretty = ((days < 10) ? "0" : "") + days + ":" + ((hours < 10) ? "0" : "") + hours + ":" + ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;

    document.getElementById("countdown").innerHTML = pretty;
}

startTimer(50 * 60); // 4 minutes in seconds

//Credits to Philip M from codingforum