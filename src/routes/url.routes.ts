import { getRootHandler } from "../controllers/url.controllers";

import { Hono } from "hono";
const urlRouter = new Hono();

urlRouter.get("/", getRootHandler);


export default urlRouter;