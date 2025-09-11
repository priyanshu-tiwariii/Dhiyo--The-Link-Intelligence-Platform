import { createShortUrlHandler, getRootHandler } from "../controllers/url.controllers";

import { Hono } from "hono";
const urlRouter = new Hono();

urlRouter.get("/", getRootHandler);
urlRouter.post("/shorten", createShortUrlHandler);

export default urlRouter;