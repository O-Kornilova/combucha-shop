import express from "express";
import {
  registerUser,
  authUser,
  getUserProfile,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser); // регистрация
router.post("/login", authUser); // логин
router.get("/profile", protect, getUserProfile); // профиль

export default router;
