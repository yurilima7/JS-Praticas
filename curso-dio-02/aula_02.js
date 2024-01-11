function productValue(value, percent) {
    const calcValue = (percent / 100) * value;
    return value + calcValue;
}

function main() {
    console.log('Main');
    console.log(productValue(100, 10));
}

main();