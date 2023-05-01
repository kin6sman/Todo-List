module.exports.profile = (req, res) => {
  return res.render("user_profile");
};

module.exports.post = (req, res) => {
  return res.end("<h1>POST</h1>");
};

// render the sign up page
module.exports.signUp = (req, res) => {
  return res.render("user_sign_up", {
    title: "Codeal | Sign Up",
  });
};

// get the sign up data
module.exports.create = (req, res) => {};

// render the sign IN page
module.exports.signIn = (req, res) => {
  return res.render("user_sign_in", {
    title: "Codeal | Sign In",
  });
};
// sign in and create session for the user
module.exports.createSession = (req, res) => {};
