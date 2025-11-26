import express from "express"
import { login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { updateProfile } from '../controllers/auth.controller.js';
import { checkAuth } from '../controllers/auth.controller.js';

const router = express.Router()

// These routes are public because the user isn't logged in yet.
router.post("/signup", signup);
router.post("/login", login);

// These routes MUST be protected.
router.post("/logout", protectRoute, logout); // ✅ A user must be logged in to log out.
router.put("/update-profile", protectRoute, updateProfile); // ✅ A user must be logged in to update their profile.

router.get("/check", protectRoute, checkAuth);


export default router;