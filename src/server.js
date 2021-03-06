const io = require("socket.io")();

io.on("connection", client => {
  client.on("subscribeToCalculation", calculation => {
    console.log("client is subscribing to get updates of calculator");
    console.log(calculation);
    client.broadcast.emit("calculation", calculation);
  });
});

const allowedOrigins = "*:*";

const port = process.env.PORT || 8000;
io.origins('*:*');
//io(server,{origins:allowedOrigins}); 
io.listen(port);
console.log("listening on port ", port);
