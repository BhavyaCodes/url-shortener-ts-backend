import { Router } from "express";
import { create, redirect } from "./controllers";

const router = Router();

router.post("/", create);

router.get("/:shortUrl", redirect);

export default router;
