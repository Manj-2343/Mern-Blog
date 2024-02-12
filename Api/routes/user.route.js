import express from "express";
import { test } from "../controller/controller.js";
import { deleteUser, signOut, updateUser } from "../controller/userController.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signOut",signOut);
export default router;
