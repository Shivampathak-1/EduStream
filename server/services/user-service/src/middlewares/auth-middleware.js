require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;
const User = require("../models/user-model");

// Middleware to check if the user is authenticated
const isLoggedIn = async (req, res, next) => {
  let token =
    req.cookies.accessToken ||
    (req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
      ? req.headers.authorization.split(" ")[1]
      : null);

  if (!token)
    return res.status(401).json({ message: "Unauthorized, token missing" });

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    // console.log("Decoded Token:", req.user);
    return next();
  } catch (error) {
    console.error("Token Verification Error:", error.message);

    // If access token is expired, try refreshing it
    if (error.name === "TokenExpiredError") {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken)
        return res
          .status(401)
          .json({ message: "Session expired, please log in again" });

      try {
        const user = await User.findOne({ refreshToken });
        if (!user)
          return res.status(403).json({ message: "Invalid refresh token" });

        jwt.verify(refreshToken, REFRESH_SECRET, (err, decoded) => {
          if (err)
            return res.status(403).json({ message: "Invalid refresh token" });

          // Generate new access token
          const newAccessToken = jwt.sign(
            { userId: user._id, role: user.role },
            JWT_SECRET,
            { expiresIn: "1hr" }
          );

          res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
          });

          req.user = jwt.verify(newAccessToken, JWT_SECRET);
          next();
        });
      } catch (err) {
        return res
          .status(401)
          .json({ message: "Session expired. Please log in again" });
      }
    } else {
      return res.status(401).json({ message: "Invalid token" });
    }
  }
};

module.exports = { isLoggedIn };
