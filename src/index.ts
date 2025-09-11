import { Hono } from 'hono'
import urlRouter from './routes/url.routes'
import { prismaMiddleware } from './db/prisma';
const app = new Hono()

app.use('*',prismaMiddleware);
app.route("/api/v1", urlRouter);

export default app
