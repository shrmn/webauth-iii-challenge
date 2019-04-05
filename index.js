const server = require("./server");

const port = 6500;

server.listen(port, () =>
  console.log(`\n*** Running on http://localhost:${port} ***\n`)
);
