
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

//con el number, number, le decimos ya que devuelve 2 opciones
function taxCalculation(options: TaxCalculationOptions): [number, number] {
    //Desestructura dentro para hacer mas visual el código
    const {tax, products } = options;

    let total = 0;

    products.forEach(({ price }) => { //Ya vamos al price directamente
        total += price;
    });

    return [total, total * tax];
}

const [total, taxes] = taxCalculation({
    products: shoppingCart,
    tax
});

console.log('Total', total);
console.log('Tax', taxes);





export { }