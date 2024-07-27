const express=require("express");
const {router : v1Routes, protectedRouter : v1protectedRoutes}=require('./v1');
const router=express.Router();

router.use("/v1",v1Routes);
router.use("/v1", v1protectedRoutes)

module.exports=router;