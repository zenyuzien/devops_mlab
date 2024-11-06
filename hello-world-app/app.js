const http = require('http');

// Create a server that responds with "Hello World"
const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Set content type to plain text
    res.end('Hello World\n'); // Send the response
});

// The server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

