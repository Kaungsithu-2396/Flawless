import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
export async function GET(request: NextRequest) {
    revalidatePath("/", "layout");
    return Response.json({ revalidated: true, now: Date.now() });
}
