import express from "express";
import { viewResource } from "../controller/resources.js";

const router=express.Router();

router.get("/",viewResource)

export default router