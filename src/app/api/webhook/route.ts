import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    console.log("revalidation triggered");
    revalidatePath("https://flawless-two.vercel.app/product");
    return Response.json({ revalidated: true, now: Date.now() });
    //     const path = request.nextUrl.searchParams.get("path");

    //     if (path) {
    //         revalidatePath("/product");
    //         return Response.json({ revalidated: true, now: Date.now() });
    //     }

    //     return Response.json({
    //         revalidated: false,
    //         now: Date.now(),
    //         message: "Missing path to revalidate",
    //     });
}
