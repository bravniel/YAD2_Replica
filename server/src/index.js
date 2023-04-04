const express = require("express");
const cors = require("cors");
const connectToSqlDB = require("./db/sqlConnect");
const { ErrorHandler } = require("./middleware/errorHandler");

const userRouter = require("./routers/userRouter");
const realEstateRouter = require("./routers/realEstateRouter");
const adRouter = require('./routers/adRouter');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use('/realestate', realEstateRouter);
app.use(adRouter);
app.use(ErrorHandler);

app.listen(port, async () => {
  console.log(`-> Server is on Port ${port}, Awaiting DB Connection...`);
  await connectToSqlDB();
  console.log("server has been connected to SQL DB successfully.");
});

module.exports = app;

// To run the server and open the port --> npm run start.
