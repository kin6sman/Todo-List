module.exports.home = (req, res) => {
  console.log(req.cookies);
  res.cookie("user_id", 20);
  return res.render("home");
  // res.end("<h1>Express is up for Codeail</h1>");
};
