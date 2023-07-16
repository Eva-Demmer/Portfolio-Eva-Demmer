const app = require("./src/app");

require("dotenv").config();

const port = process.env.APP_PORT ?? 6001;

app.listen(port, (err) => {
  if (err) {
    console.error("Oops! Something went wrong.");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});