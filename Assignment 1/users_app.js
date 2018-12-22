const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/' ) {
        res.write('<html>');
        res.write('<head><title>Enter Username</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></input></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users') {
        res.write('<html>');
        res.write('<ul><li>User 1</li><li>User 2</li></ul>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString().split('=')[1];
            const message = parsedBody.split('=')[1];
            console.log(message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    
});

server.listen(3000);