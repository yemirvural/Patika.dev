const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const pageName = url.slice(1);
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Welcome to index page</h2>`)
    }else if(url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Welcome to ${pageName} page</h2>`)
    }else if(url === '/contact'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Welcome to ${pageName} page</h2>`)
    }else{
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>404</h2>`)
    }
    res.end();
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})