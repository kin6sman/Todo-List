const User = require("../models/user");

module.exports.profile = async (req, res) => {
  try {
    if (req.cookies.user_id) {
      const user = await User.findById(req.cookies.user_id);
      if (user) {
        return res.render("user_profile", {
          title: "User Profile",
          user: user,
        });
      }
      // return res.redirect("/users/sign-in");
    } else {
      return res.redirect("/users/sign-in");
    }
  } catch (error) {
    console.log(error);
  }

  //
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
module.exports.createSession = async (req, res) => {
  try {
    // find the user
    const user = await User.findOne({ email: req.body.email });

    // handle user found
    if (user) {
      // handle password which don't match
      if (user.password != req.body.password) {
        console.log("password not match");
        return req.redirect("back");
      }

      // handel session creation
      res.cookie("user_id", user.id);
      return res.redirect("/users/profile");
      //
    } else {
      // handle user not found
      console.log("handled user not found");
      return res.redirect("back");
    }
  } catch (error) {
    console.log(error + " Error");
    return;
  }
};
