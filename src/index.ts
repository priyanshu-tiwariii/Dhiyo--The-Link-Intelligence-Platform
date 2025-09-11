import { Hono } from 'hono'
import urlRouter from './routes/url.routes'

const app = new Hono()

app.route("/api/v1", urlRouter);

export default app
