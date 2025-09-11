import { Context } from "hono";
import { generateShortCode } from "../utils/shortCode";
export const getRootHandler = (c:Context)=>{
    return c.text('Hi its Dhiyo!!!');
}


export const createShortUrlHandler = async (c:Context)=>{
    try {
        const prisma = c.get("prisma");
            if(!prisma){
                throw new Error("Prisma client not found in context");
            }
        const body = await c.req.json();
        const {originalUrl} = body;
        if(!originalUrl){
            return c.json({error:"Original URl is required"}, 400);
        }

        const shortCode = generateShortCode();

        const newUrl = await prisma.url.create({
            data:{
                originalUrl,
                shortCode
            }
        });
        const responseData = {
      ...newUrl,
      id: newUrl.id.toString(),
    };

    
        return c.json({data:responseData, message:"Short URL created successfully"}, 201);

    } catch (error) {
        console.error('Error creating short URL:', error);
        return c.json({ error: 'Failed to create short URL', details: error instanceof Error ? error.message : String(error) }, 500);
    }
}