const express=require("express");
const router=express.Router();
const {health, signup}=require('../../controllers');
const { login } = require("../../controllers/login");
const userProfile = require("../../controllers/userProfile");
const createProtectedRouter = require("../../utils/protectedRouter")

const protectedRouter = createProtectedRouter();
router.get('/health',health.info);
router.post('/signup', ...signup);
router.post("/login", ...login);

protectedRouter.get("/user", userProfile)

module.exports= {router, protectedRouter};