const User = require("../models/user");

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
module.exports.create = async (req, res) => {
  try {
    if (req.body.password != req.body.confirm_password) {
      return res.redirect("back");
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const createdUser = await User.create(req.body);
      return res.redirect("/users/sign-in");
    } else {
      return res.redirect("back");
    }
  } catch (error) {
    console.log("error in signing up", error);
    return res.redirect("back");
  }
};

// render the sign IN page
module.exports.signIn = (req, res) => {
  return res.render("user_sign_in", {
    title: "Codeal | Sign In",
  });
};
// sign in and create session for the user
module.exports.createSession = (req, res) => {};
