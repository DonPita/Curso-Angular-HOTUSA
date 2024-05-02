
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia 3310',
    price: 199.99
}

const tablet: Product = {
    description: 'Xiaomi Leira',
    price: 249.99
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): number[] {

    let total = 0;

    options.products.forEach(product => {
        total += product.price;
    });

    return [total, total * options.tax];
}

const result = taxCalculation({
    products: shoppingCart,
    tax
});

console.log('Total', result[0]);
console.log('Tax', result[1]);





export { }