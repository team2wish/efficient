const { setupServer } = require("./server");
const cors = require("cors");

const server = setupServer();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

server.use(cors(corsOptions));

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

console.log("server start");
