const express = require("express");
const authController = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.post("/register", ...authController.register);
router.post("/login", authController.login);
router.post("/logout", authMiddleware.isLoggedIn, authController.logout);
router.post("/refresh-token", authController.refreshToken);
router.get("/profile", authMiddleware.isLoggedIn, authController.profile);
router.put("/profile/update", authMiddleware.isLoggedIn, authController.updateProfile);

module.exports = router;
