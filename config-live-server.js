const fs = require("fs");
const tls = require("tls");

const options = {
  key: fs.readFileSync("server-key.pem"),
  cert: fs.readFileSync("server-cert.pem"),
  requestCert: true,
  ca: [ fs.readFileSync("client-cert.pem") ]
};

const server = tls.createServer(options, (socket) => {
  console.log("server connected", socket.authorized ? "authorized" : "unauthorized");
  socket.write("welcome!/n");
  socket.setEncoding("utf8);
  socket.pipe(socket);
});

server.listen(8000, () => {
  console.log("server bound");
});

module.exports = {
  cert: fs.readFileSync(__dirname + "/server.cert"),
  key: fs.readFileSync(__dirname + "/server.key"),
  passphrase: "12345"
};
