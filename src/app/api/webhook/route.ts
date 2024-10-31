import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { paths } = await request.json();
       
        for (const path of paths) {
            revalidatePath(encodeURI(path));
        }
        return Response.json({
            revalidated: true,
            now: Date.now(),
        });
    } catch (error) {
        return Response.json({
            revalidated: false,
            now: Date.now(),
        });
    }
}
