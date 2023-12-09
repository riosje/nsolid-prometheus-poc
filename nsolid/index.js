const http = require('http');

// Random port number between 49152 and 65535
function getRandomPort() {
  return Math.round(Math.random() * (65535 - 49152) + 49152);
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

const PORT = process.env.PORT || getRandomPort();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Function to make an HTTP request to the server
function makeHttpRequest() {
  const client = http.request({
    host: 'localhost',
    port: PORT,
    path: '/',
    method: 'GET',
  }, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      console.log('Response from the server:');
      console.log(data);
    });
  });

  client.end(); // Send the request
}

// Run the HTTP client every X seconds
function getRandomInterval() {
  return Math.round(Math.random() * (1000 - 10000) + 10000);
}
setInterval(() => {
  makeHttpRequest();
}, getRandomInterval());
