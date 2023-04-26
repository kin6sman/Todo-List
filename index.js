const express = require("express"); //1. calling express
const app = express(); // 2. creating app/website server through express
const port = 8000; // 3. initiating port

// 5. Git
//6. use express router
app.use("/", require("./routes"));

//4. checking if server is running or not
app.listen(port, (err) => {
  if (err) {
    console.log(`Error while listening ${err}`);
  }

  console.log("Server is Running Good!");
});
