export interface product {
    _id: string;
    count: number;
    name: string;
    productCode: string;
    mainCategory: string;
    productImageCol: [
        {
            url: string;
            publicID: string;
        }
    ];
    subCategory: string;
    stock: number;
    price: number;
    description: string;
}
export interface category {
    _id: string;
    name: string;
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
export interface contactForm {
    name: string;
    email: string;
    phone: number;
    message: string;
}
