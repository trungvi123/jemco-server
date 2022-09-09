import express from "express";
import { createAdmin,compareAdmin,getAllAdmins } from "../controllers/adminController.js";

const router = express.Router();

router.post("/signUp",createAdmin );
router.post("/signIn",compareAdmin );


export default router;
