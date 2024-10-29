import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const path = request.nextUrl.searchParams.get("path");
    console.log(path);
    if (path) {
        const pathArr = path.split(",");
        pathArr.forEach((el) => revalidatePath(el.trim()));
        return Response.json({ revalidated: true, now: Date.now() });
    }

    return Response.json({
        revalidated: false,
        now: Date.now(),
        message: "Missing path to revalidate",
    });
}
