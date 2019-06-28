const http = require('http');
const app_port = process.env.app_port || 8080;

//unir html:
const getWebPage = () => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    
        <style>
            body {
                background-color: burlywood;
                margin: 50px;
            }
    
            h1 {
                color: sienna;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-size: 48px;
    
            }
    
            p {
                color: sienna;
                font-size: 24px;
            }
    
        </style>
    </head>
    <body>
    
        <h1>Página de prueba para Node</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit rem exercitationem provident laborum at corrupti alias similique, minus nam magnam aliquam vitae perferendis minima soluta, facilis non tempora porro.</p>

        <p><i>${new Date().toLocaleString()} </i></p>
        
    </body>
    </html>
    `;

http.createServer((req, res) => {
    console.log(req.url);
    console.log('llego request frontend')
    if(req.url == '/mipagina') {

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(getWebPage()) 
        res.end();
    }
}).listen(app_port, err => {
    if (!err) console.log('Web server running at http://' + ': ' + app_port);
});