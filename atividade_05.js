const productPrice = 100;
// const paymentMethod = 'Debito';
// const paymentMethod = 'Dinheiro';
// const paymentMethod = 'PIX';
// const paymentMethod = '2x';
const paymentMethod = '3x';

if (paymentMethod === 'Debito') {
    let value = productPrice - (productPrice * 0.1);
    console.log("Valor de pagamento R$", value.toFixed(2));
} else if (paymentMethod === 'Dinheiro' || paymentMethod === 'PIX') {
    let value = productPrice - (productPrice * 0.15);
    console.log("Valor de pagamento R$", value.toFixed(2));
} else if (paymentMethod === '2x') {
    let value = productPrice / 2;
    console.log("Valor de pagamento 2x de R$", value.toFixed(2));
} else {
    let value = (productPrice * 1.10);
    console.log("Valor de pagamento R$", value.toFixed(2));
}