import { revalidatePath } from "next/cache";

export async function GET(req: Request) {
    console.log("revalidation trigger");
    revalidatePath("/product");
    return Response.json({
        revalidated: true,
        now: new Date(),
    });
}
