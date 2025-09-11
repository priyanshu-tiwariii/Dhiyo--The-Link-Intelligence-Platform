//to generate shortCode ->

export const generateShortCode = (Length:number = 6):string=>{
    return Math.random().toString(36).substring(2, 2 + Length);
}
