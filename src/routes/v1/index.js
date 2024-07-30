const express = require("express");
const router = express.Router();
const createProtectedRouter = require("../../utils/protectedRouter");
const { health, signup, login, userProfile, generateOtp } = require('../../controllers');

const protectedRouter = createProtectedRouter();
router.get('/health', health.info);
router.post('/signup', ...signup);
router.post("/login", ...login);
protectedRouter.get("/user", userProfile);
router.get("/otp/generate", ...generateOtp)

module.exports = { router, protectedRouter };