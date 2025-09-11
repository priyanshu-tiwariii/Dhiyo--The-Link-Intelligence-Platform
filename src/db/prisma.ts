//middleware to create the prisma client and attach it to the context

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { createMiddleware } from "hono/factory";

export const prismaMiddleware = createMiddleware( async(c:Context,next:any)=>{
    if(!c.get("prisma")){
    const prisma = new PrismaClient({
        datasources:{
            db:{
                url:c.env.DATABASE_URL
            },
        }
    }).$extends(withAccelerate());
    c.set("prisma", prisma);
}
    await next();
});

