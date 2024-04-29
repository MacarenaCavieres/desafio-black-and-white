import { emailMethod } from "../controllers/email.controller.js";
import { Router } from "express";

const router = Router();

router.get("/email", emailMethod.sendEmail);

export default router;
