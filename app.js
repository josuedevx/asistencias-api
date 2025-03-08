const express = require("express");
const cors = require("cors");
const path = require("path");
const logging = require("./src/config/logging");

const app = express();

app.use((req, res, next) => {
  logging.info(
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    logging.info(
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
    );
  });

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [process.env.FRONTEND_POINT]
  })
);

app.use(express.static(path.join(__dirname, "src/public")));

app.use("/v1", require("./src/routes/authRouter"));
app.use("/v1", require("./src/routes/qrRouter"));
app.use("/v1", require("./src/routes/usersRouter"));
app.use("/v1", require("./src/routes/asistenceRouter"));

app.use("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "src/views", "404.html"));
});

module.exports = app;