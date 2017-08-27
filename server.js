var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = 
{
    'article-one' :
    {
    title:'Article One|Aditya Rath',
    heading: 'Article One',
    date:'Sep 5,2016',
    content :
    `<p>
                My first web page.
            </p>
            
            <p>
                Hello World.
            </p>
    `},
    'article-two' :
   {
    title:'Article Two|Aditya Rath',
    heading: 'Article Two',
    date:'Sep 5,2016',
    content :
    `<p>
                My second web page.
            </p>
            
            <p>
                Hello World.
            </p>
 `  },
    'article-three' :
    {
    title:'Article Three|Aditya Rath',
    heading: 'Article Three',
    date:'Sep 5,2016',
    content :
    `<p>
                My third web page.
            </p>
            
            <p>
                Hello World.
            </p>
 `},
 
};
 
function createTemplate(data)
{
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate =`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" contents="width=device-width, initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
             </div>
                <hr/>
                    <h3>
                    ${heading}
                    </h3>
            <div>
            ${date}
            </div>
        
        <div>
            ${content}
        </div>
        </div>
    </body>
    
</html>
`
;
return htmlTemplate;
}







app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleNAme==
    var articleName = req.parans.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
   res.send(createTemplate(articleTwo));
});
app.get('/article-three', function (req, res) {
  res.send(createTemplate(articleThree));
});






app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
