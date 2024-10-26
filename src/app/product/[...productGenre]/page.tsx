// import React from "react";
// import ProductShows from "../../../../components/ProductShows";
// export default async function page({
//     params: { productGenre },
// }: {
//     params: { productGenre: String[] };
// }) {

//     const [item, item2] = productGenre;
//     let apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/genre?category=${item}`;
//     if (item2) {
//         apiUrl += `&subCategory=${item2}`;
//     }
//     async function getProductAsProductGenre() {
//         try {
//             const resp = await fetch(apiUrl);
//             if (!resp.ok) throw new Error("fetch error");
//             const data = await resp.json();
//             return data.products;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     const products = (await getProductAsProductGenre()) || [];

//     return (
//         <>
//             <ProductShows products={products} />
//         </>
//     );
// }
import React from "react";
import ProductShows from "../../../../components/ProductShows";
async function getCategoryAndSubCategory() {
    const categoryURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/category`;
    const subCategoryURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/subCategory`;
    const [categoryResp, subCategoryResp] = await Promise.all([
        fetch(categoryURL),
        fetch(subCategoryURL),
    ]);
    if (!categoryResp.ok || !subCategoryResp.ok) {
        throw new Error("failed to fetch");
    }
    const categories = await categoryResp.json();
    const subCategories = await subCategoryResp.json();
    return { categories, subCategories };
}
export async function generateStaticParams() {
    const { categories, subCategories } = await getCategoryAndSubCategory();
    const paths = [];
    subCategories.data.forEach((sub: any) => {
        const category = categories.data.find(
            (cat: any) => cat._id === sub.mainCategory
        );
        paths.push({ productGenre: [category.name, sub.name] });
    });
    const categoryPaths = categories.data.map((cat: any) => {
        return {
            productGenre: [cat.name],
        };
    });
    paths.push(...categoryPaths);
    return paths;
}
export const revalidate = 20;

export default async function page({
    params: { productGenre },
}: {
    params: { productGenre: String[] };
}) {
    const [item, item2] = productGenre;
    let apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/genre?category=${item}`;
    if (item2) {
        apiUrl += `&subCategory=${item2}`;
    }
    const productResp = await fetch(apiUrl);
    if (!productResp.ok) throw new Error("Failed to fetch products");
    const products = await productResp.json();

    return (
        <>
            <ProductShows products={products.products} />
        </>
    );
}
