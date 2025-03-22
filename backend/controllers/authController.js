const passport = require("passport");

const login = async (req, res, next) => {
  passport.authenticate("local", (error, user) => {
    if (error) return next(err);
    if (!user) {
      res.status(401).json({ authenticated: false });
    }

    req.logIn(user, (error) => {
      if (error) return next(error);
      return res.json({ authenticated: true, user });
    });
  })(req, res, next);
};

const logout = (req, res) => {
  req.logout((error) => {
    if (error)
      return res.status(500).json({
        message: "Error logging out!",
      });

    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: "Error destroying session" });
      }

      res.clearCookie("connect.sid", {
        path: "/",
      });

      return res.json({ authenticated: false, message: "Logged out!" });
    });
  });
};

const authStatus = async (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
};

module.exports = { login, logout, authStatus };

