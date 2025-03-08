require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const logging = require("./src/config/logging");
const user = require("./src/routes/usersRouter");
const qr = require("./src/routes/qrRouter");
const auth = require("./src/routes/authRouter");
const asistence = require("./src/routes/asistenceRouter");

const front = process.env.FRONTEND_POINT;

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
    origin: [front],
  })
);

app.use(express.static(path.join(__dirname, "src/public")));

app.use("/v1", auth);
app.use("/v1", qr);
app.use("/v1", user);
app.use("/v1", asistence);

app.use("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "src/views", "404.html"));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
