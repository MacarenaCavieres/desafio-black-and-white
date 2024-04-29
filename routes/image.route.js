import { imageMethod } from "../controllers/image.controller.js";
import { Router } from "express";

const router = Router();

router.get("/image", imageMethod.getImage);

router.post("/image", imageMethod.postImage);

export default router;
