import express from "express";
import { addResource } from "../controller/resources.js";

const router=express.Router();

router.post("/",addResource);

export default router;

