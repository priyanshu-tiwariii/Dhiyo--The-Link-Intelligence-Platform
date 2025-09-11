import { Context } from "hono";

export const getRootHandler = (c:Context)=>{
    return c.text('Hi its Dhiyo!!!');
}