export interface product {
    id: number;
    count: number;
    name: string;
    productCode: string;
    mainCategory: string;
    productImages: string[];
    subCategory: string;
    stock: number;
    price: number;
    description: string;
}
export interface category {
    id: number;
    name: string;
    subCategories: string[];
}
export interface checkoutForm {
    name: string;
    email: string;
    installmentPlan: boolean;
    phone: number;
    zipCode: number;
    lineId: string;
    additionalMessage: string;
    address: string;
}
