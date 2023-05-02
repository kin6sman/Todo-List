const express = require("express"); //1. calling express
const cookieParser = require("cookie-parser"); // 10. Cookies
const app = express(); // 2. creating app/website server through express
const port = 8000; // 3. initiating port
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

app.use(express.urlencoded()); //11.

app.use(cookieParser()); // 12.

// 9. Static files
app.use(express.static("./assets"));

// 8. Layout call 1st before route
app.use(expressLayouts);
// extract style and script from sub pages into layouts
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// 5. Git
//6. use express router
app.use("/", require("./routes"));

// 7. view engine setup
app.set("view engine", "ejs");
app.set("views", "./views");

//4. checking if server is running or not
app.listen(port, (err) => {
  if (err) {
    console.log(`Error while listening ${err}`);
  }

  console.log("Server is Running Good!");
});
