function debit(productPrice) {
    let value = productPrice - (productPrice * 0.1);
    return "Valor de pagamento R$ " + value.toFixed(2);
}

function pixOrMoney(productPrice) {
    let value = productPrice - (productPrice * 0.15);
    return "Valor de pagamento R$ " + value.toFixed(2);
}

function twice(productPrice) {
    let value = productPrice / 2;
    return "Valor de pagamento 2x de R$ " + value.toFixed(2);
}

function others(productPrice, quantity) {
    let value = (productPrice * 1.10);
    return "Valor de pagamento em " + quantity +  "x de R$ " + value.toFixed(2);
}

function payment(productPrice, quantity, type) {
    if (type === 1) {
        return debit(productPrice);
    } else if (type === 2 || type === 3) {
        return pixOrMoney(productPrice);
    } else if (type === 4) {
        return twice(productPrice);
    } else {
        return others(productPrice, quantity);
    }
}

(function () {
    const productPrice = 100;
    console.log(payment(productPrice, 3, 1));
    console.log(payment(productPrice, 3, 2));
    console.log(payment(productPrice, 3, 3));
    console.log(payment(productPrice, 3, 4));
    console.log(payment(productPrice, 3, 5));
})();