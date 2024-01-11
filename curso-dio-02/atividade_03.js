function checkOverage(age) {
    if (age >= 18) {
        return 'Maior de idade';
    } else {
        return 'Menor de idade';
    }
}

(function () {
    console.log(checkOverage(23));
})();